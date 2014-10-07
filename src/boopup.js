
(function() {
    'use strict';

    var template = '<div id=boopup><div id=alert-modal class="modal fade bs-example-modal-sm" aria-hidden=true tabindex=-1><div class="modal-dialog modal-sm"><div class=modal-content><div class="modal-header boopup-header"><button type=button class=close data-dismiss=modal><span aria-hidden=true>&times;</span><span class=sr-only>Close</span></button><h4 class=modal-title>Alert</h4></div><div class=modal-body><p id=alert-modal-body></p></div><div class="modal-footer boopup-footer"><button type=button class="btn btn-primary" data-dismiss=modal autofocus>OK</button></div></div></div></div><div id=confirm-modal class="modal fade bs-example-modal-sm" aria-hidden=true tabindex=-1><div class="modal-dialog modal-sm"><div class=modal-content><div class="modal-header boopup-header"><h4 class=modal-title>Confirm</h4></div><div class=modal-body><p id=confirm-modal-body></p></div><div class="modal-footer boopup-footer"><button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.confirmResponse(false) autofocus>Cancel</button> <button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.confirmResponse(true)>OK</button></div></div></div></div><div id=prompt-modal class="modal fade bs-example-modal-sm" aria-hidden=true tabindex=-1><div class="modal-dialog modal-sm"><div class=modal-content><div class="modal-header boopup-header"><h4 class=modal-title>Confirm</h4></div><div class=modal-body><p id=prompt-modal-body></p><input type=text id=prompt-modal-text></div><div class="modal-footer boopup-footer"><button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.promptResponse(false) autofocus>Cancel</button> <button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.promptResponse(true)>OK</button></div></div></div></div></div>';

    window.Boopup = function() {
        $("body").append(template);

        return {
            callback: null,
            alert: function(message) {
                $("#alert-modal-body").text(message);
                $("#alert-modal").modal("show");
                $("#alert-modal").on('shown.bs.modal', function() {
                    $(this).find("button[autofocus]").focus();
                });
            },
            confirm: function(message, callback) {
                $("#confirm-modal-body").text(message);
                $("#confirm-modal").modal("show");
                $("#confirm-modal").on('shown.bs.modal', function() {
                    $(this).find("button[autofocus]").focus();
                });

                this.callback = callback;
            },
            prompt: function(message, callback) {
                $("#prompt-modal-body").text(message);
                $("#prompt-modal").modal("show");
                $("#prompt-modal").on('shown.bs.modal', function() {
                    $(this).find("button[autofocus]").focus();
                });

                this.callback = callback;
            },
            confirmResponse: function(response) {
                if (this.callback) {
                    this.callback(response);
                }
            },
            promptResponse: function(response) {
                if (this.callback) {
                    if (response) {
                        this.callback($("#prompt-modal-text").val());
                    } else {
                        this.callback(null);
                    }
                }
            }
        };
    }();

} ());