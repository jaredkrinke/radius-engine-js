/// <reference path="radius.js" />
/// <reference path="radius-ui.js" />

function GameLayer() {
    Layer.call(this);
}

GameLayer.prototype = Object.create(Layer.prototype);

window.addEventListener('DOMContentLoaded', function () {
    Radius.initialize(document.getElementById('canvas'));
    Radius.start(new GameLayer());
});
