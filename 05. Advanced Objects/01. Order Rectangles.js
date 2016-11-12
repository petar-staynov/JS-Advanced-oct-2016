function orderRects(rectsData) {
    let rects = [];
    for (let [width, height] of rectsData) {
        let rect = createRect(width, height);
        rects.push(rect);
    }
    rects.sort((a,b) => a.compareTo(b));
    return rects;
}



orderRects([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]);