function Center(data, parentElement) {
    var name = data.name;
    var x = (180 + data.long) / 360;
    var y = (90 - data.lat) / 180;
    var span = document.createElement('span');
    span.style.left = x * 100 + '%';
    span.style.top = y * 100 + '%';
    span.setAttribute("name", name);
    var dom = parentElement.appendChild(span);
    var distSqr = function(xNew, yNew) {
        var dx = x - xNew,
            dy = y - yNew;
        return dx * dx + dy * dy;
    };
    return {name:name, x:x,y:y,dom:dom,distSqr: distSqr};
}
