function TaxiQueue() {
	let localStorePassengerCountVal = localStorage.getItem('passengerCount');
    let localStoreTaxiCountVal = localStorage.getItem('taxiCount');
    
    var passengerQueueCount = Number(localStorePassengerCountVal) || 0;
	var taxiQueueCount = Number(localStoreTaxiCountVal) || 0;

	function joinQueue() {
		passengerQueueCount++
	
		return passengerQueueCount;
	}

	function leaveQueue() {
		if(passengerQueueCount > 0) {
			passengerQueueCount--
		}
		return passengerQueueCount;
	}

	function joinTaxiQueue() {
		taxiQueueCount++

		return taxiQueueCount;
	}

	function queueLength() {
		return passengerQueueCount;
	}

	function taxiQueueLength() {
		return taxiQueueCount;
	}

	function taxiDepart(){
		if(passengerQueueCount > 12 && taxiQueueCount > 1){
			taxiQueueCount--
			passengerQueueCount -= 12;
		}
		return {taxiQueueCount, passengerQueueCount};
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}