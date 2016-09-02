﻿// Main JS that runs on every page in project
// On Resize
function onResize() {
    // run first
    rsHiding = false;

    // layout
    $.fn.alignVertically(2.1, true);

    // run last
    $('#PublicWrapper').first().animate({ 'opacity': 1 }, 300);
}

// On Document Ready
function onDocumentReadyInit() {
    docReadyRun = true;

    // My presentation cookie
    if (!$.cookie('currentPresentation')) {
        $.fn.presentation.persistCurrentReport();
    }
    else {
        $.fn.presentation.loadCurrentReport();
    }

    // run always
    onResize();

    // Presentation
    $.fn.presentation.bindPages();
    if ($('#prev-next').length)
        $('#prev-next').presentation.setPrevNext();
    if ($('#my-presentation-editor').length)
        $('#my-presentation-editor').presentation.createEditor();
}

// On Window Ready
function onWindowLoadInit() {
    winLoadRun = true;

    // Image rotator
    $('#Background').rotateBackgroundImages();

    // Enable content slides
    $('#main-menu-toggle').menuTwoLevelExp(true);
}

