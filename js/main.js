function ready() {
    var navigation = document.querySelector('.navigation');


    window.addEventListener('scroll', function() {
        if(window.scrollY > 200) {
            navigation.classList.add('navigation-scroll');
        } else {
            navigation.classList.remove('navigation-scroll');
        }
    });

    var navigationSearch = document.querySelector('.navigation__search');
    var searchPopup= document.querySelector('.search-popup');

    navigationSearch.addEventListener('click', function() {
        searchPopup.classList.toggle('active');
        navigation.classList.toggle('navigation-popup');
    })

    var navigationMenu = document.querySelectorAll('.navigation__list_item');

    navigationMenu.forEach(item => {
        item.addEventListener('mouseenter', function (){
            var navigationMenuSection = item.dataset.section;

            var requiredComponent = document.querySelector(`.navigation-submenu__part[data-section="${navigationMenuSection}"]`);

            var activeElement = document.querySelector('.navigation-submenu__part--active');
            if (activeElement && activeElement !== requiredComponent) {
                removeActiveSubmenu();
            }

            if (requiredComponent) {
                requiredComponent.classList.add('navigation-submenu__part--active');
            }
        });
    })

    document.querySelector('.fuck').addEventListener('mouseleave', removeActiveSubmenu)
}

function removeActiveSubmenu() {
    var activeElement = document.querySelector('.navigation-submenu__part--active');
    if (activeElement) {
        activeElement.classList.remove('navigation-submenu__part--active');
    }
}

document.addEventListener("DOMContentLoaded", ready);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlYWR5KCkge1xuICAgIHZhciBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKTtcblxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDIwMCkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLXNjcm9sbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbmF2aWdhdGlvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19zZWFyY2gnKTtcbiAgICB2YXIgc2VhcmNoUG9wdXA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcG9wdXAnKTtcblxuICAgIG5hdmlnYXRpb25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VhcmNoUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbi1wb3B1cCcpO1xuICAgIH0pXG5cbiAgICB2YXIgbmF2aWdhdGlvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbl9fbGlzdF9pdGVtJyk7XG5cbiAgICBuYXZpZ2F0aW9uTWVudS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIHZhciBuYXZpZ2F0aW9uTWVudVNlY3Rpb24gPSBpdGVtLmRhdGFzZXQuc2VjdGlvbjtcblxuICAgICAgICAgICAgdmFyIHJlcXVpcmVkQ29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdmlnYXRpb24tc3VibWVudV9fcGFydFtkYXRhLXNlY3Rpb249XCIke25hdmlnYXRpb25NZW51U2VjdGlvbn1cIl1gKTtcblxuICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1zdWJtZW51X19wYXJ0LS1hY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQgIT09IHJlcXVpcmVkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWN0aXZlU3VibWVudSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVxdWlyZWRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZENvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLXN1Ym1lbnVfX3BhcnQtLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1Y2snKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlQWN0aXZlU3VibWVudSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlU3VibWVudSgpIHtcbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uLXN1Ym1lbnVfX3BhcnQtLWFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1zdWJtZW51X19wYXJ0LS1hY3RpdmUnKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlYWR5KTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
