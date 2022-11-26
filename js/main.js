var SCROLLING_SPEED = 700;
var fromIndex = 1;
// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: [],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
  	responsiveWidth: 992,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'bottom',

    anchors: ['welcome','introduction','objective',
    'cr_portal_modules','super_admin_module','reporting_reviewing_officer_module',
    'establishment_branch_module','employee_module','our_clients','thank_you'], //add section id's

navigationTooltips: ['Welcome','Introduction','Objective',
'CR Portal Modules','Super Admin Module','Reporting // Reviewing Officer Module',
'Establishment Branch Module','Employee Module','Our Clients','Thank You'],
    
    menu: '#menu',
    scrollingSpeed: SCROLLING_SPEED,
    fitToSection: true,
    verticalCentered: false,
    lazyLoading: true,
  
    afterLoad: function(anchorLink, index) {},
  
    onLeave: function(index, nextIndex, direction) {},

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(!fromIndex){
        $('.fp-section').find('.fp-slidesContainer').fadeIn(0);
        $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
      }
    },
  
    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      fromIndex = slideIndex;
      if(!slideIndex){
          $.fn.fullpage.setScrollingSpeed(0);
          $('.fp-section').find('.fp-slidesContainer').hide();
        }
    },

  }); 

