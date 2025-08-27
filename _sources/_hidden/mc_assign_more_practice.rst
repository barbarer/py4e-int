Practice Problems
============================

.. raw:: html

    <h3>Loading...</h3>

    <script type="text/javascript">

      EXP_COOKIE = "mooc_nested";

      // helper: set cookie
      function setCookie(name, value) {
         document.cookie = name + "=" + (value || "") + "; path=/";
      }


      // helper: get cookie
      function getCookie(name) {
         var cookieName = name + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length);
         }
         return null;
      }


      window.onload = function() {

         var href = '';
         // get prev set cookie
         var cond = getCookie(EXP_COOKIE);
         // if no prev set cookie: generate random condition and set cookie
         if (cond != 'nt' && cond != 'wt') {
            var v = Math.floor(Math.random() * 2);
            if (v < 1) {
                cond = 'nt';
            } else {
                cond = 'wt';
            }
            setCookie(EXP_COOKIE, cond); // expires at end of session
         }

         if (cond == 'nt') {
            href = "mc_nested-nt.html"
         } else if (cond == 'wt') {
            href = "mc_nested-wt.html"
         }
         window.location.href = href;
      };
    </script>

