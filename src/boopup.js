
(function() {
    'use strict';

    var template = '<div id=alert-modal class="modal fade bs-example-modal-sm" aria-hidden=true><div class="modal-dialog modal-sm"><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal><span aria-hidden=true>&times;</span><span class=sr-only>Close</span></button><h4 class=modal-title>Alert</h4></div><div class=modal-body><p id=alert-modal-body></p></div><div class=modal-footer><button type=button class="btn btn-primary" data-dismiss=modal>OK</button></div></div></div></div><div id=confirm-modal class="modal fade bs-example-modal-sm" aria-hidden=true><div class="modal-dialog modal-sm"><div class=modal-content><div class=modal-header><h4 class=modal-title>Confirm</h4></div><div class=modal-body><p id=confirm-modal-body></p></div><div class=modal-footer><button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.confirmResponse(false)>Cancel</button><button type=button class="btn btn-primary" data-dismiss=modal onclick=Boopup.confirmResponse(true)>OK</button></div></div></div></div>';

    window.Boopup = function() {
        $("body").append(template);

        return {
            callback: null,
            alert: function(message) {
                $("#alert-modal-body").text(message);
                $("#alert-modal").modal("show");
            },
            confirm: function(message, callback) {
                $("#confirm-modal-body").text(message);
                $("#confirm-modal").modal("show");

                this.callback = callback;
            },
            confirmResponse: function(response) {
                if (this.callback) {
                    this.callback(response);
                }
            }
        }
    }();

} ());