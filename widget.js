!function(window, document, widgetId) {
    window.addEventListener('message', function(e) {
        var data = e.data;
        if (!e.origin || e.origin.replace(/^https?:\/\//,'') !== 'wuddrum.github.io' || !+data || data <= 0) return;
        document.getElementById(widgetId).style.height = data + 'px';
    });
    window.addEventListener('load', function() {
        var widget = document.getElementById(widgetId);
        var onWindowScroll = function() {
            var widgetRect = widget.getBoundingClientRect();
            if (widgetRect.right > 0 && widgetRect.left < window.innerWidth && widgetRect.bottom > 0 && widgetRect.top < window.innerHeight) {
                window.removeEventListener('scroll', onWindowScroll);
                widget.contentWindow.postMessage({v:1}, '*');
            }
        }
        window.addEventListener('scroll', onWindowScroll);
    });
}(window, document, 'NewsWidget');