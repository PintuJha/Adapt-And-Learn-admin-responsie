// =========HEADER CODE START============
window.addEventListener("resize", function() {
    "use strict"; window.location.reload(); 
});
document.addEventListener("DOMContentLoaded", function()
{
/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element)
{
        element.addEventListener('click', function(e)
        {
                e.stopPropagation();
        });
})
// make it as accordion for smaller screens
if (window.innerWidth < 992)
{
        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
        {
                everydropdown.addEventListener('hidden.bs.dropdown', function()
                {
                        // after dropdown is hidden, then find all submenus
                        this.querySelectorAll('.submenu')
                                .forEach(function(everysubmenu)
                                {
                                        // hide every submenu as well
                                        everysubmenu
                                                .style
                                                .display =
                                                'none';
                                });
                })
        });
        document.querySelectorAll('.dropdown-menu a').forEach(function(element)
        {
                element.addEventListener('click', function(e)
                {
                        let nextEl = this.nextElementSibling;
                        if (nextEl && nextEl.classList
                                .contains('submenu'))
                        {
                                // prevent opening link if link needs to open dropdown
                                e.preventDefault();
                                console.log(nextEl);
                                if (nextEl.style.display ==
                                        'block')
                                {
                                        nextEl.style.display =
                                                'none';
                                }
                                else
                                {
                                        nextEl.style.display =
                                                'block';
                                }
                        }
                });
        })
}
// end if innerWidth
});
// DOMContentLoaded  end
// OffCanvas Menu 
(function()
{
'use strict'
document.querySelector('#navbarSideCollapse').addEventListener('click', function()
{
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
})
})()
// =========HEADER CODE END============


// ==============Question Category select code start============
$(document).ready(function(){
        $('ul#navi li a').click(function(){
          $('li a').removeClass("active");
          $(this).addClass("active");
      });
      });

// ==============Question Category select code End============