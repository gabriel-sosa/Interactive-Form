/**************************declarations**************************/
const design = {																			//takes care of what to show and what to hide, depending the user chooses for the design of the t-shirt
	js_puns: () => {
		$(`#color`).val(`cornflowerblue`);
		$(`#color option`).slice(0,3).show();
		$(`#color option`).slice(3).hide();
	},
	heart_js: () => {
		$(`#color`).val(`tomato`);
		$(`#color option`).slice(0,3).hide();
		$(`#color option`).slice(3).show();
	}
}
const activityNames = [																		//an array with all the activities with the name, the cost and if it coincides with another activity, 
	{name: `all`, cost: 200}, 																//the index of said activity
	{name: `js-frameworks`, cost: 100, coincides: 3}, 
	{name: `js-libs`, cost: 100, coincides: 4}, 
	{name: `express`, cost: 100, coincides: 1}, 
	{name: `node`, cost: 100, coincides: 2}, 
	{name: `build-tools`, cost: 100}, 
	{name: `npm`, cost: 100}
];
const changeTotal = e => {																	//will take care of adding or subtracting to the total cost
	const total = $(`#total`);
	if ($(e.target).prop(`checked`))
		total.text(parseInt(total.text()) + e.data.cost);
	else
		total.text(parseInt(total.text()) - e.data.cost);
}
const hideElement = e => {																	//hides an activity if the user has chosen an activity that starts at the same time
	$(`input[name=${activityNames[e.data.coincides].name}]`).parent().toggle();
	$(`input[name=${activityNames[e.data.coincides].name}]`).prop(`checked`, false);
	changeTotal(e);
}
const payment = {																			//shows the right content when the user chooses the payment method 
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
/**************************initial changes to the DOM**************************/
$(`#other-title`).hide();															//hides the "other" input field
$(`#name`).focus();																	//gives focus to the first input element
$(`#design option:first`).hide();													//hides the default design option so the user can't choose it
$(`option[value=select_method]`).hide();											//hides the default payment method
$(`.activities`).append(`<h3>Your total is : <span id="total">0</span>$</h3>`);		//creates and appends the element that will display the total cost
payment.credit_card();																//sets the credit card as the default method
/**************************event listeners**************************/
$(`#title`).on(`change`, () => ($(`#title`).val() === `other`)?input.show():input.hide());//shows the "other" input field when user chooses the title
$(`#design`).on(`change`, () => design[$(`#design`).val()]());							  //shows and hides options form the color selection
//in this next line, will add an event listener to each activity checkbox, if the activity coincides with another, this will be hidden
$(`.activities input`).each((index, activity) => $(activity).on(`change`, activityNames[index], (activityNames[index].coincides === undefined)? changeTotal : hideElement));
$(`#payment`).on(`change`, e => payment[$(e.target).val()]());							//shows the content depending on the payment method
$(`form`).on(`submit`, e => {															//the submit form listener, here will be checked that the information is in order
	const checkName = () => {															//checks Name and Emain
		if (!/\w+/.test($(`#name`).val())){
			alert(`insert your name`);
			return false;
		}
		if (!/\w+@\w+.\w+/.test($(`#mail`).val())){
			alert(`insert your email`);
			return false;
		}
		return true;
	}
	const checkActivities = () => {														//checks that at least one activity is active
		const inputs = $(`.activities input`);
		for (let i = 0; i < inputs.length; i++){
			if (inputs.eq(i).prop(`checked`))
				return true;
		}
		alert(`You must have atleast one activity checked`);
		return false;
	}
	const checkPayment = () => {														//checks payment, if credit card has been selected, will check number, zip and cvv
		const payType = $(`#payment`).val();
		if (payType === `paypal` || payType === `bitcoin`)
			return true;
		else if (payType === `credit_card`) {
			if (!/^\d{13,16}$/.test($(`#cc-num`).val())){
				alert(`insert your credit card number`);
				return false;
			}
			if (!/^\d{5}$/.test($(`#zip`).val())){
				alert(`insert your zip code`);
				return false;
			}
			if (!/^\d{3}$/.test($(`#cvv`).val())){
				alert(`insert your cvv`);
				return false;
			}
			return true;
		} else {
			alert(`You must insert your payment info`);
			return false;
		}
	}
	e.preventDefault();
	if (checkName() && checkActivities() && checkPayment())							//if everything is in order the user is created
		alert('user created');
});