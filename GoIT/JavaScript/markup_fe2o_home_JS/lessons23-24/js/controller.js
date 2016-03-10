define (
    'controller',
    ['jquery', 'model', 'view'],
    function() {

        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item__delete', removeItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var itemDelete = $(this).attr('data-value');

                model.removeItem(itemDelete);
                view.renderList(model.data);
            }
        }
        return Controller
    }
);