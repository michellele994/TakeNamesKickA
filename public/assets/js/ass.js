$(function() {
	$(".kick-em").on("click", function(event) {
		const id = $(this).data("id");
		const newKick = $(this).data("newkick");

		const newKickState = {
			ass_kicked: !newKick
		};

		$.ajax("/api/asses/" + id, {
			type: "PUT",
			data: newKickState
		}).then(
		function() {
			console.log("ass has been changed to", newKick);

			location.reload();
		});
	})
})