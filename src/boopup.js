
(function() {
    'use strict';

    var template = '<div id=boopup><div id=alert-modal class="modal fade bs-example-modal-sm" aria-hidden=true tabindex=-1><div class="modal-dialog modal-sm"><div class=modal-content><div class="modal-header boopup-header"><button type=button class=close data-dismiss=modal><span aria-hidden=true>&times;</span><span class=sr-only>Close</span></button><h4 class=modal-title>Alert</h4></div><div class=modal-body><p id=alert-modal-body></p></div><div class="modal-footer boopup-footer"><button type=button class="btn btn-primary" data-dismiss=modal autofocus>OK</button></div></div></div></div><div id=confirm-modal class="modal fade bs-example-modal-sm" aria-hidden=true tabindex=-1><div class="modal-dialog modal-sm"><div class=modal-content><div class="modal-header boopup-header"><h4 class=modal-title>Confirm</h4></div><div class=modal-body><p id=confirm-modal-body></p></div><div class="modal-footer boopup-footer"><button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.confirmResponse(false) autofocus>Cancel</button> <button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.confirmResponse(true)>OK</button></div></div></div></div><div id=prompt-modal class="modal fade bs-example-modal-sm" aria-hidden=true tabindex=-1><div class="modal-dialog modal-sm"><div class=modal-content><div class="modal-header boopup-header"><h4 class=modal-title>Confirm</h4></div><div class=modal-body><p id=prompt-modal-body></p><input type=text id=prompt-modal-text></div><div class="modal-footer boopup-footer"><button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.promptResponse(false) autofocus>Cancel</button> <button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.promptResponse(true)>OK</button></div></div></div></div></div>';

    window.Boopup = function() {
        $("body").append(template);

        /**
         * Modals have a hide watcher that triggers callback. Don't trigger more than once.
         * @type {boolean}
         */
        var modalReplied = false;

        /**
         * Don't call jquery more than once to get an element.
         */
        var elem = {
            alertModal: $('#alert-modal'),
            confirmModal: $("#confirm-modal"),
            promptModal: $("#prompt-modal"),
            alertModalBody: $('#alert-modal-body'),
            confirmModalBody: $("#confirm-modal-body"),
            promptModalBody: $("#prompt-modal-body"),
            promptModalText: $("#prompt-modal-text")
        };

        return {
            callback: null,
            alert: function(message) {
                elem.alertModalBody.text(message);
                elem.alertModal.modal("show");
                elem.alertModal.on('shown.bs.modal', function() {
                    $(this).find("button[autofocus]").focus();
                });
            },
            confirm: function(message, callback) {
                elem.confirmModalBody.text(message);

                modalReplied = false;

                elem.confirmModal.modal("show");

                elem.confirmModal.on('shown.bs.modal', function() {
                    $(this).find("button[autofocus]").focus();
                });
                var self = this;
                elem.confirmModal.on('hidden.bs.modal', function() {
                    if ( ! modalReplied ) {
                        self.confirmResponse(false);
                    }
                });

                this.callback = callback;
            },
            prompt: function(message, callback) {
                elem.promptModalBody.text(message);

                modalReplied = false;

                elem.promptModal.modal("show");
                elem.promptModal.on('shown.bs.modal', function() {
                    elem.promptModalText.focus();
                });

                var self = this;
                elem.promptModal.on('hidden.bs.modal', function() {
                    if ( ! modalReplied ) {
                        self.promptResponse(false);
                    }
                });

                this.callback = callback;
            },
            /**
             * Called from template button
             * @param response
             */
            confirmResponse: function(response) {
                modalReplied = true;
                if (this.callback) {
                    this.callback(response);
                }
            },
            /**
             * Called from template button
             * @param response
             */
            promptResponse: function(response) {
                modalReplied = true;
                if (this.callback) {
                    if (response) {
                        this.callback( elem.promptModalText.val() );
                    } else {
                        this.callback(null);
                    }
                }
            }
        };
    }();

} ());