$(document).ready(function() {
    $("ul").on("click", "span", function() {
        var li = $(this).parent();
        var taskId = li.data("id");
        var isDone = $(this).hasClass("done");
        $.ajax({
            url: '/toggle-done/' + taskId + '/',
            method: 'POST',
            data: {
                'done': !isDone,
                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val()
            },
            success: function(response) {
                if(response.done) {
                    $(li).find("span").addClass("done");
                } else {
                    $(li).find("span").removeClass("done");
                }
            }
        });
    });

	$("ul").on("click", "i.fa-trash", function() {
        var li = $(this).parent();
        var taskId = li.data("id");
        $.ajax({
            url: '/delete/' + taskId + '/',
            method: 'DELETE',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-CSRFToken", $('input[name="csrfmiddlewaretoken"]').val());
            },
            success: function() {
                li.remove();
            }
        });
    });

    $("input[name='task_text']").keypress(function(event) {
        if(event.which === 13) {
            event.preventDefault();
            var todoText = $(this).val();
            $(this).val("");
            $.post('/add/', {
                csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val(),
                task_text: todoText
            }, function(data) {
                $("#taskList").append("<li data-id='" + data.id + "'><i class='fa fa-trash fa-fw' aria-hidden='true'></i><span>" + data.task_text + "</span></li>");
            });
        }
    });

    $(".fa-plus-square").click(function() {
        $("input[type='text']").fadeToggle();
    });
});
