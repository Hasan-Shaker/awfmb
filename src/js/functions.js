window.$ = window.jQuery = jQuery;

var fn = {

	extend: function(origOptions, userOptions) {
	    var extendOptions = {}, attrname;

	    for (attrname in origOptions) {
	        extendOptions[attrname] = origOptions[attrname];
	    }
	    for (attrname in userOptions) {
	        extendOptions[attrname] = userOptions[attrname];
	    }

	    return extendOptions;
	},

	/**
	 * Returns a random number between min (inclusive) and max (exclusive)
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	 */
	getRandomArbitrary: function(min, max) {
	  	return Math.random() * (max - min) + min;
	},

	/*
     * Replace all SVG images with inline SVG
     * http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
     */
    inlineSVG: function() {

        $('.js-svg').each(function(){

            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            var imgWidth = $img.attr('width');
            var imgHeight = $img.attr('height');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Give SVG dimensions from image
                if (imgWidth && imgHeight) {
                    $svg.attr({
                        'width': imgWidth,
                        'height': imgHeight
                    });
                }

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }
}

module.exports = fn;