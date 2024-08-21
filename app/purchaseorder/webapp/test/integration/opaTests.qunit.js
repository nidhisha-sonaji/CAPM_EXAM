sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/niddhi/purchaseorder/test/integration/FirstJourney',
		'ust/niddhi/purchaseorder/test/integration/pages/POsList',
		'ust/niddhi/purchaseorder/test/integration/pages/POsObjectPage',
		'ust/niddhi/purchaseorder/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/niddhi/purchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);