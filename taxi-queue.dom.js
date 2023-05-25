// write your DOM code here.
// DOM element reference
const passengerQueueCount = document.querySelector(".passenger_queue_count");
const btnJoinQueue = document.querySelector(".join_queue");
const btnLeaveQueue = document.querySelector(".leave_queue");

const taxiQueueCount = document.querySelector(".taxi_queue_count");
const btnJoinTaxiQueue = document.querySelector(".join_taxi_queue");

const btnDepart = document.querySelector(".depart");

// DOM element event listeners
btnJoinQueue.addEventListener("click", btnJoinQueue_onCLick);
btnLeaveQueue.addEventListener("click", btnLeaveQueue_onCLick);
btnJoinTaxiQueue.addEventListener("click", btnJoinTaxiQueue_onClick);
btnDepart.addEventListener("click", btnDepart_onClick);

// create Factory Function instance
const taxiQueue = TaxiQueue();

// DOM events
if (localStorage["passengerCount"]) {
  // ensure counter is a number and set it to the innerHTML
  passengerQueueCount.innerHTML = localStorage["passengerCount"];
}

if (localStorage["taxiCount"]) {
  // ensure counter is a number and set it to the innerHTML
  taxiQueueCount.innerHTML = localStorage["taxiCount"];
}

function btnJoinQueue_onCLick() {
  localStorage["passengerCount"] = taxiQueue.joinQueue();
  passengerQueueCount.innerHTML = taxiQueue.queueLength();
}

function btnLeaveQueue_onCLick() {
  localStorage["passengerCount"] = taxiQueue.leaveQueue();
  passengerQueueCount.innerHTML = taxiQueue.queueLength();
}

function btnJoinTaxiQueue_onClick() {
  localStorage["taxiCount"] = taxiQueue.joinTaxiQueue();
  taxiQueueCount.innerHTML = taxiQueue.taxiQueueLength();
}

function btnDepart_onClick() {
  //taxiQueue.taxiDepart();
  localStorage["taxiCount"] = taxiQueue.taxiQueueLength();
  localStorage["passengerCount"] = taxiQueue.queueLength();
  taxiQueueCount.innerHTML = taxiQueue.taxiQueueLength();
  passengerQueueCount.innerHTML = taxiQueue.queueLength();
}
