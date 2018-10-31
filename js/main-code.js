const input = $(`<input type="text" id="other-title" placeholder="Your Job Role">`);
$(`#name`).focus();
input.hide();
$(`fieldset:first`).append(input);
$(`#title`).on(`change`, () => {
	if ($(`#title`).val() === `other`)
		input.show();
	else
		input.hide();
});
$(`#design`).on(`change`, () => {
	if ($(`#design`).val() === `js puns`){
		$(`#color`).val(`cornflowerblue`);
		$(`#color option`).slice(0,3).show();
		$(`#color option`).slice(3).hide();
	}else if ($(`#design`).val() === `heart js`){
		$(`#color`).val(`tomato`);
		$(`#color option`).slice(0,3).hide();
		$(`#color option`).slice(3).show();
	}
});
const total = $(`<h3>0</h3>`);
const changeTotal = e => {
	if ($(e.target).prop(`checked`))
		total.text(parseInt(total.text()) + e.data.cost);
	else
		total.text(parseInt(total.text()) - e.data.cost);
}
const hideElement = e => {
	$(`input[name=${e.data.name}]`).parent().toggle();
	$(`input[name=${e.data.name}]`).prop(`checked`, false);
	changeTotal(e);
}
$(`.activities`).append(total);
$(`input[name=all]`).on(`change`, {cost: 200}, changeTotal);
$(`input[name=js-frameworks]`).on(`change`, {name: `express`, cost: 100}, hideElement);
$(`input[name=js-libs]`).on(`change`, {name: `node`, cost: 100}, hideElement);
$(`input[name=express]`).on(`change`, {name: `js-frameworks`, cost: 100}, hideElement);
$(`input[name=node]`).on(`change`, {name: `js-libs`, cost: 100}, hideElement);
$(`input[name=build-tools]`).on(`change`, {cost: 100}, changeTotal);
$(`input[name=npm]`).on(`change`, {cost: 100}, changeTotal);
$(`option[value=select_method]`).hide();
const payment = {
	type: index => {
		let element = $(`#credit-card`);
		for (let i = 0; i <= 2; i++){
			if (index === i)
				element.show();
			else
				element.hide();
			element = element.next();
		}
	},
	credit_card: () => payment.type(0),
	paypal: () => payment.type(1),
	bitcoin: () => payment.type(2),
}
$(`#payment`).on(`change`, e => payment[$(e.target).val()]());
$(`form`).on(`submit`, e => {
	const checkActivities = () => {
		const inputs = $(`.activities input`);
		for (let i = 0; i < inputs.length; i++){
			if (inputs.eq(i).prop(`checked`))
				return true;
		}
		return false;
	}
	const checkPayment = () => {
		const payType = $(`#payment`).val();
		if (payType === `paypal` || payType === `bitcoin`)
			return true;
		else if (payType === `credit_card`) {
			return /^\d{13,16}$/.test($(`#cc-num`).val()) && /^\d{5}$/.test($(`#zip`).val()) && /^\d{3}$/.test($(`#cvv`).val());
		} else 
			return false;
	}
	e.preventDefault();
	if (/\w+/.test($(`#name`).val()) && /\w+@\w+.\w+/.test($(`#mail`).val()) && checkActivities() && checkPayment())
		alert('user created');
})