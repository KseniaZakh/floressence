$(document).ready(function() {

/* клик по блоку с изображением, которое нужно увеличить */
	$('div.lb.action').on('click', function(e) {
		/* создаем элемент для вывода изображения */
		var element = document.createElement('div');
		/* добавляем созданному элементу класс lbox */
		element.setAttribute('class', 'lbox');
		/* добавляем в HTML-код элемента изображение */
		element.innerHTML = $(this).html();
		/* размещаем HTML-код элемента в конце главного контейнера */
        $('div.container').append(element);
        e.preventDefault();
		});

	/* клик по блоку с увеличенным изображением */
	$('div.container').on('click', 'div.lbox', function(e) {
		/* удаляем HTML-код ранее созданного элемента */
		$(this).remove();
		e.preventDefault();
		});

		return false;
	});
