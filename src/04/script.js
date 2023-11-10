export function drawCardBorder() {
  // 获取所有的卡片
  const cardList = document.getElementsByClassName('gen-art-card')
  // 遍历所有卡片
  for (let i = 0; i < cardList.length; i++) {
    const card = cardList[i]

    // 获取卡片宽度
    const width = card.offsetWidth;
    // 获取卡片高度
    const height = card.offsetHeight;
    // 获取卡片圆角
    let radius = window.getComputedStyle(card).getPropertyValue('border-radius');
    // 将卡片圆角转换为浮点数
    radius = parseFloat(radius)

    // 创建画布

    const elementToDelete = document.getElementById('gen-art-border');
    if (elementToDelete!== null){
      elementToDelete.remove();}
    const canvas = document.createElement('canvas');
    canvas.classList.add('gen-art-border');
    const context = canvas.getContext('2d');

    // 设置画布宽度
    const maxCirW = 1
    canvas.width = card.offsetWidth + maxCirW * 4;
    // 设置画布高度
    canvas.height = card.offsetHeight + maxCirW * 4;

    // 计算卡片圆的角度
    const radiusLen = 2 * radius * Math.PI
    // 计算每个圆的角度
    const pointNum = Math.round(radiusLen / (0.1 * maxCirW))
    // 遍历每个圆
    for (let i = 0; i < pointNum; i++) {
      const t = i / (pointNum - 1)
      const ang = t * Math.PI * 2

      let cen
      // 如果圆角小于0.25，则圆心为卡片宽度减去圆角的2倍
      if (t < 0.25) {
        cen = { x: width - radius, y: height - radius }
      // 如果圆角小于0.5，则圆心为卡片高度减去圆角的2倍
      } else if (t < 0.5) {
        cen = { x: radius, y: height - radius }
      // 如果圆角小于0.75，则圆心为卡片宽度减去圆角的2倍
      } else if (t < 0.75) {
        cen = { x: radius, y: radius }
      // 否则圆心为卡片高度减去圆角的2倍
      } else {
        cen = { x: width - radius, y: radius }
      }

      // 计算圆的中心点
      const px = cen.x + radius * Math.cos(ang)
      const py = cen.y + radius * Math.sin(ang)
      // 计算圆的宽度
      const cirW = random(0.2, 1) * maxCirW

      // 填充卡片
      context.fillStyle = '#000';
      context.beginPath();
      context.arc(px + maxCirW * 2, py + maxCirW * 2, cirW, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
    const lineList = []
    lineList.push({ x0: radius, y0: 0, x1: width - radius, y1: 0 })
    lineList.push({ x0: width, y0: radius, x1: width, y1: height - radius })
    lineList.push({ x0: width - radius, y0: height, x1: radius, y1: height })
    lineList.push({ x0: 0, y0: height - radius, x1: 0, y1: radius })
    for (let i = 0; i < lineList.length; i++) {
      const line = lineList[i]
      const d = dist(line.x0, line.y0, line.x1, line.y1)
      const lerpNum = Math.round(d / (0.1 * maxCirW))
      for (let j = 0; j < lerpNum; j++) {
        const t = j / (lerpNum - 1)
        const p = {
          x: line.x0 * (1 - t) + line.x1 * t,
          y: line.y0 * (1 - t) + line.y1 * t
        }

        const cirW = random(0.2, 1) * maxCirW

        const offAng = random() * Math.PI * 2
        const offLen = 0.2 * maxCirW
        const offVec = { x: offLen * Math.cos(offAng), y: offLen * Math.sin(offAng) }

        context.fillStyle = '#000';
        context.beginPath();
        context.arc(p.x + offVec.x + maxCirW * 2, p.y + offVec.y + maxCirW * 2, cirW, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
    }

    canvas.style.position ='absolute'; 
    canvas.style.left = `-${maxCirW * 2}px`; 
    canvas.style.top = `-${maxCirW * 2}px`; 

    // 获取父元素的第一个子节点（参考节点）
    const firstChild = card.firstChild;

    // 使用 insertBefore 将新元素插入到第一个子节点之前
    card.insertBefore(canvas, firstChild);
  }
}

// 为canvas添加一个线段
function dist(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// 计算两点之间的距离
function random(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

export function drawCardBorder1() {
  // 获取所有的卡片
  const cardList = document.getElementsByClassName('gen-art-card1')
  // 遍历所有卡片
  for (let i = 0; i < cardList.length; i++) {
    const card = cardList[i]

    // 获取卡片宽度
    const width = card.offsetWidth;
    // 获取卡片高度
    const height = card.offsetHeight;
    // 获取卡片圆角
    let radius = window.getComputedStyle(card).getPropertyValue('border-radius');
    // 将卡片圆角转换为浮点数
    radius = parseFloat(radius)

    // 创建画布

    const elementToDelete = document.getElementById('gen-art-border');
    if (elementToDelete!== null){
      elementToDelete.remove();}
    const canvas = document.createElement('canvas');
    canvas.classList.add('gen-art-border');
    const context = canvas.getContext('2d');

    // 设置画布宽度
    const maxCirW = 1
    canvas.width = card.offsetWidth + maxCirW * 4;
    // 设置画布高度
    canvas.height = card.offsetHeight + maxCirW * 4;

    // 计算卡片圆的角度
    const radiusLen = 2 * radius * Math.PI
    // 计算每个圆的角度
    const pointNum = Math.round(radiusLen / (0.1 * maxCirW))
    // 遍历每个圆
    for (let i = 0; i < pointNum; i++) {
      const t = i / (pointNum - 1)
      const ang = t * Math.PI * 2

      let cen
      // 如果圆角小于0.25，则圆心为卡片宽度减去圆角的2倍
      if (t < 0.25) {
        cen = { x: width - radius, y: height - radius }
      // 如果圆角小于0.5，则圆心为卡片高度减去圆角的2倍
      } else if (t < 0.5) {
        cen = { x: radius, y: height - radius }
      // 如果圆角小于0.75，则圆心为卡片宽度减去圆角的2倍
      } else if (t < 0.75) {
        cen = { x: radius, y: radius }
      // 否则圆心为卡片高度减去圆角的2倍
      } else {
        cen = { x: width - radius, y: radius }
      }

      // 计算圆的中心点
      const px = cen.x + radius * Math.cos(ang)
      const py = cen.y + radius * Math.sin(ang)
      // 计算圆的宽度
      const cirW = random(0.2, 1) * maxCirW

      // 填充卡片
      context.fillStyle = '#000';
      context.beginPath();
      context.arc(px + maxCirW * 2, py + maxCirW * 2, cirW, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
    const lineList = []
    lineList.push({ x0: radius, y0: 0, x1: width - radius, y1: 0 })
    lineList.push({ x0: width, y0: radius, x1: width, y1: height - radius })
    lineList.push({ x0: width - radius, y0: height, x1: radius, y1: height })
    lineList.push({ x0: 0, y0: height - radius, x1: 0, y1: radius })
    for (let i = 0; i < lineList.length; i++) {
      const line = lineList[i]
      const d = dist(line.x0, line.y0, line.x1, line.y1)
      const lerpNum = Math.round(d / (0.1 * maxCirW))
      for (let j = 0; j < lerpNum; j++) {
        const t = j / (lerpNum - 1)
        const p = {
          x: line.x0 * (1 - t) + line.x1 * t,
          y: line.y0 * (1 - t) + line.y1 * t
        }

        const cirW = random(0.2, 1) * maxCirW

        const offAng = random() * Math.PI * 2
        const offLen = 0.2 * maxCirW
        const offVec = { x: offLen * Math.cos(offAng), y: offLen * Math.sin(offAng) }

        context.fillStyle = '#000';
        context.beginPath();
        context.arc(p.x + offVec.x + maxCirW * 2, p.y + offVec.y + maxCirW * 2, cirW, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
    }

    canvas.style.position ='absolute'; 
    canvas.style.left = `-${maxCirW * 2}px`; 
    canvas.style.top = `-${maxCirW * 2}px`; 

    // 获取父元素的第一个子节点（参考节点）
    const firstChild = card.firstChild;

    // 使用 insertBefore 将新元素插入到第一个子节点之前
    card.insertBefore(canvas, firstChild);
  }
}
