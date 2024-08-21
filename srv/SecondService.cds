using { ust.nidhisha.sonaji.db.transaction, ust.nidhisha.sonaji.db.master1 } from '../db/datamodel2';

service SecondService @(path:'SecondService'){

    
    entity ProductSet as projection on master1.product;
    entity BusinessPartnerSet as projection on master1.businesspartner;
    entity BusinessAddressSet as projection on master1.address;

    entity POs @(odata.draft.enabled: true) as projection on transaction.purchaseorder{
        *,
        Items,
        case OVERALL_STATUS
            when 'P' then 'Pending'
            when 'N' then 'New'
            when 'A' then 'Approved'
            when 'X' then 'Rejected'
            end as OverallStatus : String(10),
        case OVERALL_STATUS
            when 'P' then 2
            when 'N' then 2
            when 'A' then 3
            when 'X' then 1
            end as ColorCode : Integer,
    }

    function getStatusDefault() returns POs;
    entity POItems as projection on transaction.poitems;
}


