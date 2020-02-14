$("#btnRules").click(function() {
	$("#pnlRules").toggle();
	$("#pnlSettings").hide();
	$("#pnlInfo").hide();
});

$("#btnSettings").click(function() {
	$("#pnlSettings").toggle();
	$("#pnlRules").hide();
	$("#pnlInfo").hide();
});

$("#btnInfo").click(function() {
	$("#pnlInfo").toggle();
	$("#pnlSettings").hide();
	$("#pnlRules").hide();
});

$("#btnAddSkill").click(function() {
	$("#skills")
		.add(
			'<div class="person input-block"><input type="text" name=name class="form-control name" placeholder="Name"/><input type="email" name=email class="form-control email" placeholder="Email"/></div>'
		)
		.appendTo("#skills");
});
