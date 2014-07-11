YUI().use('aui-dropdown', 'node', function(Y) {
    var navbarToggle = Y.one('.navbar-toggle');
    var navbarCollapse = Y.one('.navbar-collapse');

    navbarToggle.on('click', function(e) {
        navbarCollapse.toggleClass('collapse');

        e.preventDefault();
        e.stopPropagation();
    });

    new Y.Dropdown({
        boundingBox: '.dropdown',
        contentBox: '.dropdown-menu',
        trigger: '.dropdown .dropdown-toggle',
        render: true
    });
});
