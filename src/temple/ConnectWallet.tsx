import { NetworkType } from "@airgap/beacon-sdk";
import { Wallet } from "@mui/icons-material";
import { Button } from "@mui/material";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { TokenMetadata, tzip12, Tzip12Module } from "@taquito/tzip12";

export type TZIP21TokenMetadata = TokenMetadata & {
  artifactUri?: string; //A URI (as defined in the JSON Schema Specification) to the asset.
  displayUri?: string; //A URI (as defined in the JSON Schema Specification) to an image of the asset.
  thumbnailUri?: string; //A URI (as defined in the JSON Schema Specification) to an image of the asset for wallets and client applications to have a scaled down image to present to end-users.
  description?: string; //General notes, abstracts, or summaries about the contents of an asset.
  minter?: string; //The tz address responsible for minting the asset.
  creators?: string[]; //The primary person, people, or organization(s) responsible for creating the intellectual content of the asset.
  isBooleanAmount?: boolean; //Describes whether an account can have an amount of exactly 0 or 1. (The purpose of this field is for wallets to determine whether or not to display balance information and an amount field when transferring.)
};

enum PagesPaths {
  CATALOG = "",
  OFFERS = "offers",
  MINT = "mint",
}

type ButtonProps = {
  Tezos: TezosToolkit;
  setUserAddress: Dispatch<SetStateAction<string>>;
  setUserBalance: Dispatch<SetStateAction<number>>;
  wallet: BeaconWallet;
  nftContratTokenMetadataMap: Map<number, TZIP21TokenMetadata>;
};

const ConnectButton = ({
  Tezos,
  setUserAddress,
  setUserBalance,
  wallet,
  nftContratTokenMetadataMap,
}: ButtonProps): JSX.Element => {
  const navigate = useNavigate();

  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: import.meta.env.VITE_TEZOS_NODE,
        },
      });
      // gets user's address
      const userAddress = await wallet.getPKH();
      const balance = await Tezos.tz.getBalance(userAddress);
      setUserBalance(balance.toNumber());
      setUserAddress(userAddress);
      if (nftContratTokenMetadataMap && nftContratTokenMetadataMap.size > 0)
        navigate(PagesPaths.CATALOG);
      else navigate(PagesPaths.MINT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button sx={{ p: 1 }} onClick={connectWallet}>
      <Wallet />
      &nbsp; Connect wallet
    </Button>
  );
};

export default ConnectButton;
