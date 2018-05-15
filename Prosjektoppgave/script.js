window.onload = startup;

            function startup() {
                document.getElementById("btnGo").onclick = code;
            }

            function code() {
                let membership = document.getElementById("membership");

                if (membership.checked == true) {
                    alert("det virker");
                }

            }
