$(function() {
	
	var html = $('#templateHtml').html();

	console.log('html', html); 
	
	var images = [
		{
			url: 'http://loremflickr.com/280/187?random=1',
			content: 'Описание 1',
		},
		{
			url: 'http://loremflickr.com/280/187?random=2',
			content: 'Описание 2'
		},
		{
			url: 'http://loremflickr.com/280/187?random=3',
			content: 'Описание 3'
		},
		{
			url: 'http://loremflickr.com/280/187?random=4',
			content: 'Описание 4'
		},
		{
			url: 'http://loremflickr.com/280/187?random=5',
			content: 'Описание 5'
		},
		{
			url: 'http://loremflickr.com/280/187?random=6',
			content: 'Описание 6'
		}
	];

	var content = tmpl(html, {
		data: images
		});

	$('body').append(content);
});