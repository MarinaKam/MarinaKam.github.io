$(function () {

    let outputContent = $(".output").contents();

    let panelHtml = CodeMirror.fromTextArea(document.getElementsByClassName('html')[0], {
        lineNumbers: true,
        autoCloseTags: true,
        mode: 'text/html',
        theme: 'neo'
    });
    let panelCss = CodeMirror.fromTextArea(document.getElementsByClassName('css')[0], {
        lineNumbers: true,
        autoCloseTags: true,
        mode: 'text/css',
        theme: 'neo'
    });
    let panelJS = CodeMirror.fromTextArea(document.getElementsByClassName('js')[0], {
        lineNumbers: true,
        autoCloseTags: true,
        mode: 'text/javascript',
        scrollbarStyle: null,
        theme: 'neo'
    });

    panelHtml.on("change", function() {
        updateHtmlPreview(panelHtml.getValue());
    });
    panelCss.on("change", function() {
        updateCssPreview(panelCss.getValue());
    });

    panelJS.on("change", function(){
        updateJsPreview(panelJS.getValue());
    });


    function updateHtmlPreview(htmlText) {
        outputContent.find("body").html(htmlText);
        updateJsPreview(panelJS.getValue());
    }

    function updateCssPreview(cssText) {
        outputContent.find("head").html("<css>" + cssText + "</css>");
    }

    function updateJsPreview(jsText) {
        outputContent.find('body script').remove();
        let script = outputContent[0].createElement('script');
        script.text = jsText;
        outputContent.find('body')[0].appendChild(script);
    }


    updateHtmlPreview(panelHtml.getValue());
    updateCssPreview(panelCss.getValue());
    updateJsPreview(panelJS.getValue());


    $('.nav__item').hover(function () {
        $(this).hasClass('active') ? $(this).toggleClass('hoverActive') : $(this).toggleClass('hover');
    });

    $('.nav__item').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).removeClass('hover');
            $(this).addClass('hoverActive');
        } else {
            $(this).addClass('hover');
            $(this).removeClass('hoverActive');
        }

        let panelId = $(this).attr('id') + 'Panel';

        $('#' + panelId).toggleClass('hidden');

        let numOfActivePanel = 4 - $('.hidden').length;

        $('.body__wrap').width(($(window).width() / numOfActivePanel) - 1);

    });

});

