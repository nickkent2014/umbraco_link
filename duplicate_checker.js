// This script checks for redirects as well as duplicate public notices

let urls = [
    {
        "url": "https://www.barnsley.gov.uk/",
        "umbraco_id": 1050
    },
    {
        "url": "https://www.barnsley.gov.uk/services/",
        "umbraco_id": 1131
    },
    {
        "url": "https://www.barnsley.gov.uk/apply-for-it/",
        "umbraco_id": 1205
    },
    {
        "url": "https://www.barnsley.gov.uk/pay-for-it/",
        "umbraco_id": 1206
    },
    {
        "url": "https://www.barnsley.gov.uk/tell-us-about-it/",
        "umbraco_id": 1207
    },
    {
        "url": "https://www.barnsley.gov.uk/news/",
        "umbraco_id": 1214
    },
    {
        "url": "https://www.barnsley.gov.uk/alerts/",
        "umbraco_id": 1216
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/",
        "umbraco_id": 1237
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/what-goes-in-your-bin/",
        "umbraco_id": 1238
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/make-the-most-of-recycling/",
        "umbraco_id": 1239
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/find-a-household-waste-recycling-centre/",
        "umbraco_id": 1242
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/permits-for-household-waste-recycling-centre/",
        "umbraco_id": 1244
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/abandoned-bins/",
        "umbraco_id": 1245
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/how-we-manage-your-waste/",
        "umbraco_id": 1249
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/",
        "umbraco_id": 1260
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/what-you-can-take-to-the-household-waste-recycling-centre-tip/",
        "umbraco_id": 1264
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/recycling-banks/",
        "umbraco_id": 1265
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/",
        "umbraco_id": 1275
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/",
        "umbraco_id": 1278
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/",
        "umbraco_id": 1279
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/",
        "umbraco_id": 1281
    },
    {
        "url": "https://www.barnsley.gov.uk/find-your-nearest/",
        "umbraco_id": 1284
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/",
        "umbraco_id": 1451
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/",
        "umbraco_id": 1453
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/",
        "umbraco_id": 1456
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/",
        "umbraco_id": 1460
    },
    {
        "url": "https://www.barnsley.gov.uk/services/museums-and-galleries/",
        "umbraco_id": 1465
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/",
        "umbraco_id": 1469
    },
    {
        "url": "https://www.barnsley.gov.uk/services/consumer-protection/",
        "umbraco_id": 1470
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/",
        "umbraco_id": 1471
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/",
        "umbraco_id": 1473
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/",
        "umbraco_id": 1477
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/",
        "umbraco_id": 1512
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/your-council-tax-bill/",
        "umbraco_id": 1513
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-bands-and-charges/",
        "umbraco_id": 1514
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-band-reduction-for-disabled-people/",
        "umbraco_id": 1516
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/",
        "umbraco_id": 1517
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-appeals/",
        "umbraco_id": 1518
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/apply-for-housing-benefit/",
        "umbraco_id": 1520
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-support/apply-for-council-tax-support/",
        "umbraco_id": 1521
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/extra-help-to-pay-your-rent-dhp/",
        "umbraco_id": 1523
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/change-your-details-for-council-tax/",
        "umbraco_id": 1524
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/change-your-details-for-housing-benefit/",
        "umbraco_id": 1525
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-discounts/",
        "umbraco_id": 1526
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-exemptions/",
        "umbraco_id": 1527
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-refunds/",
        "umbraco_id": 1528
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-support/council-tax-support-reviews/",
        "umbraco_id": 1531
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-support/backdated-benefit/",
        "umbraco_id": 1534
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/if-you-dont-pay-your-council-tax/",
        "umbraco_id": 1533
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/housing-benefit-appeals/",
        "umbraco_id": 1535
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/how-we-get-overpaid-housing-benefit-back/",
        "umbraco_id": 1536
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/landlord-information-about-housing-benefit/",
        "umbraco_id": 1538
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/local-housing-allowance-private-rented/",
        "umbraco_id": 1539
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/under-occupancy-rules/",
        "umbraco_id": 1540
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/universal-credit-and-the-benefit-cap/",
        "umbraco_id": 1541
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-support/how-non-dependants-affect-your-benefit/",
        "umbraco_id": 1548
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/",
        "umbraco_id": 1593
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/view-your-council-tax-and-benefits-online/",
        "umbraco_id": 1605
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/how-to-use-our-online-forms/",
        "umbraco_id": 1606
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/complaints-and-compliments/",
        "umbraco_id": 2622
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/dealing-with-your-complaint/",
        "umbraco_id": 2623
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/childrens-social-care-complaints/",
        "umbraco_id": 2624
    },
    {
        "url": "https://www.barnsley.gov.uk/services/contact-us/",
        "umbraco_id": 2629
    },
    {
        "url": "https://www.barnsley.gov.uk/services/council-offices/",
        "umbraco_id": 2656
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/",
        "umbraco_id": 3861
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/",
        "umbraco_id": 3904
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/",
        "umbraco_id": 4309
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/using-our-websites/",
        "umbraco_id": 4310
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/british-sign-language-bsl/",
        "umbraco_id": 4311
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/easy-read-information/",
        "umbraco_id": 4312
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/signing-into-our-websites/",
        "umbraco_id": 4313
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/",
        "umbraco_id": 4314
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/",
        "umbraco_id": 4351
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/your-privacy/",
        "umbraco_id": 4352
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/what-we-do-with-your-personal-information/",
        "umbraco_id": 4357
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/data-sharing-for-the-prevention-and-detection-of-fraud/",
        "umbraco_id": 4359
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/personal-information-requests/",
        "umbraco_id": 4360
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/non-personal-information-requests/",
        "umbraco_id": 4361
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/how-we-use-cookies/",
        "umbraco_id": 4363
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/disclaimer/",
        "umbraco_id": 4364
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/list-of-our-websites/",
        "umbraco_id": 4366
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/cctv/",
        "umbraco_id": 4377
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/disabled-persons-travel-pass/",
        "umbraco_id": 8922
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/your-local-area-and-ward/",
        "umbraco_id": 10113
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/clinical-waste/",
        "umbraco_id": 10163
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/love-where-you-live/",
        "umbraco_id": 10208
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/voting/",
        "umbraco_id": 10209
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/voting-by-proxy/",
        "umbraco_id": 10210
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/voting-by-post/",
        "umbraco_id": 10211
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/general-referendum/",
        "umbraco_id": 10213
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/electoral-register/",
        "umbraco_id": 10214
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/types-of-elections/",
        "umbraco_id": 10215
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/civic-receptions-and-awards/",
        "umbraco_id": 10218
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/benefits-help-and-support/getting-help-to-claim-benefits/",
        "umbraco_id": 10219
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/benefits-help-and-support/money-and-debt-advice/",
        "umbraco_id": 10220
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/benefits-help-and-support/local-welfare-assistance-scheme/",
        "umbraco_id": 10221
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/benefits-help-and-support/foodbanks-in-barnsley/",
        "umbraco_id": 10222
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/housing-benefit/managing-someone-elses-affairs/",
        "umbraco_id": 10223
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/help-to-have-your-say-about-adult-social-care-services/",
        "umbraco_id": 11251
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/blue-badges/",
        "umbraco_id": 11260
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/older-persons-bus-pass/",
        "umbraco_id": 11261
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/disabled-persons-railcard/",
        "umbraco_id": 11263
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/bus-stops-and-shelters/",
        "umbraco_id": 11264
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/bus-lanes-and-routes/",
        "umbraco_id": 11265
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/bus-timetables/",
        "umbraco_id": 11266
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/becoming-a-british-citizen/",
        "umbraco_id": 11267
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/housing-schemes-for-older-people/",
        "umbraco_id": 11276
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/community-grants/",
        "umbraco_id": 11278
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/homeless-and-housing-advice/",
        "umbraco_id": 11292
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/home-owners/problems-paying-your-mortgage/",
        "umbraco_id": 11296
    },
    {
        "url": "https://www.barnsley.gov.uk/services/social-care/",
        "umbraco_id": 12401
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/get-a-social-care-assessment/",
        "umbraco_id": 12405
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/paying-for-your-care/",
        "umbraco_id": 12406
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/arranging-and-paying-for-your-own-support/",
        "umbraco_id": 12408
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/information-for-carers/support-for-carers/",
        "umbraco_id": 12409
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/equipment-and-adaptations/",
        "umbraco_id": 12411
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/assistive-living-technology-telecare/",
        "umbraco_id": 12412
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/occupational-therapy/",
        "umbraco_id": 12413
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/help-with-your-mental-health/mental-health-services/",
        "umbraco_id": 12418
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/sight-and-hearing-loss/",
        "umbraco_id": 12419
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/day-services/",
        "umbraco_id": 12420
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/hospital-care-and-coming-home/",
        "umbraco_id": 12422
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/reablement/",
        "umbraco_id": 12423
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/care-homes/",
        "umbraco_id": 12426
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/paying-for-a-care-home/",
        "umbraco_id": 12427
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/the-care-act/",
        "umbraco_id": 12428
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/",
        "umbraco_id": 12439
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/what-to-do-after-someone-dies/",
        "umbraco_id": 12440
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/using-the-tell-us-once-service/",
        "umbraco_id": 12442
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/arranging-a-funeral/",
        "umbraco_id": 12443
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/arranging-a-burial/",
        "umbraco_id": 12444
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/arranging-a-cremation/",
        "umbraco_id": 12445
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/buying-a-grave/",
        "umbraco_id": 12446
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/find-a-cemetery/",
        "umbraco_id": 12447
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/memorials-at-the-crematorium/",
        "umbraco_id": 12448
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/help-if-theres-nobody-to-arrange-a-funeral/",
        "umbraco_id": 12449
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/public-records-of-funerals/",
        "umbraco_id": 12450
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/the-coroner/",
        "umbraco_id": 12451
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/cemetery-maintenance-and-safety/",
        "umbraco_id": 12452
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/exhuming-a-grave/",
        "umbraco_id": 12453
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/",
        "umbraco_id": 12465
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/what-business-rates-are/",
        "umbraco_id": 12466
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/how-to-pay-your-business-rates/",
        "umbraco_id": 12480
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/what-happens-if-you-dont-pay/",
        "umbraco_id": 12485
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/learning-disability-supported-activities/",
        "umbraco_id": 12530
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/",
        "umbraco_id": 12575
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/allotments/",
        "umbraco_id": 12582
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/fishing/",
        "umbraco_id": 12583
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/tree-preservation-orders/",
        "umbraco_id": 12584
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/",
        "umbraco_id": 12585
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/",
        "umbraco_id": 12586
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/town-centre/",
        "umbraco_id": 12587
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/darton/",
        "umbraco_id": 12588
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/penistone/",
        "umbraco_id": 12589
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/dodworth-and-kingstone/",
        "umbraco_id": 12590
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/cudworth-and-darfield/",
        "umbraco_id": 12591
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/dearne/",
        "umbraco_id": 12592
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/hoyland-milton-and-rockingham/",
        "umbraco_id": 12593
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/monk-bretton-royston-and-st-helens/",
        "umbraco_id": 12594
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/stairfoot-wombwell-and-worsbrough/",
        "umbraco_id": 12595
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/brierley-great-houghton-and-grimethorpe/",
        "umbraco_id": 12596
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/recreation-and-play-areas/old-town/",
        "umbraco_id": 12597
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/ardsley-park/",
        "umbraco_id": 12598
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/carlton-park/",
        "umbraco_id": 12599
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/cudworth-park/",
        "umbraco_id": 12600
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/darfield-park/",
        "umbraco_id": 12601
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/darton-park/",
        "umbraco_id": 12602
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/elsecar-park/",
        "umbraco_id": 12603
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/jump-park/",
        "umbraco_id": 12604
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/locke-park/",
        "umbraco_id": 12605
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/mapplewell-park/",
        "umbraco_id": 12606
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/monk-bretton-park/",
        "umbraco_id": 12607
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/pilley-pocket-park/",
        "umbraco_id": 12608
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/royston-park/",
        "umbraco_id": 12610
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/thurnscoe-park/",
        "umbraco_id": 12611
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/wilthorpe-park/",
        "umbraco_id": 12612
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/wombwell-park/",
        "umbraco_id": 12613
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/worsbrough-park/",
        "umbraco_id": 12614
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/find-a-park/dearne-valley-park/",
        "umbraco_id": 12616
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/grass-cutting/",
        "umbraco_id": 12619
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/land-to-rent-for-grazing-animals/",
        "umbraco_id": 12620
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/burials-cremations-and-memorials-pricelist/",
        "umbraco_id": 12639
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/shared-lives/",
        "umbraco_id": 12651
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/",
        "umbraco_id": 12653
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-requests-for-business-rates/",
        "umbraco_id": 12655
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-april-2015/",
        "umbraco_id": 12656
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-october-2014/",
        "umbraco_id": 12657
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-april-2014/",
        "umbraco_id": 12658
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-october-2013/",
        "umbraco_id": 12659
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-june-2013/",
        "umbraco_id": 12660
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/byelaws/",
        "umbraco_id": 12718
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/",
        "umbraco_id": 12719
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/census-2011/",
        "umbraco_id": 12721
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/central-ward-profile/",
        "umbraco_id": 12722
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/cudworth-ward-profile/",
        "umbraco_id": 12723
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/darfield-ward-profile/",
        "umbraco_id": 12724
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/darton-east-ward-profile/",
        "umbraco_id": 12725
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/darton-west-ward-profile/",
        "umbraco_id": 12726
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/dearne-north-ward-profile/",
        "umbraco_id": 12727
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/dearne-south-ward-profile/",
        "umbraco_id": 12728
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/dodworth-ward-profile/",
        "umbraco_id": 12729
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/hoyland-milton-ward-profile/",
        "umbraco_id": 12748
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/kingstone-ward-profile/",
        "umbraco_id": 12749
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/monk-bretton-ward-profile/",
        "umbraco_id": 12750
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/north-east-ward-profile/",
        "umbraco_id": 12751
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/old-town-ward-profile/",
        "umbraco_id": 12752
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/penistone-east-ward-profile/",
        "umbraco_id": 12753
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/penistone-west-ward-profile/",
        "umbraco_id": 12754
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/rockingham-ward-profile/",
        "umbraco_id": 12755
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/royston-ward-profile/",
        "umbraco_id": 12756
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/st-helens-ward-profile/",
        "umbraco_id": 12757
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/stairfoot-ward-profile/",
        "umbraco_id": 12758
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/wombwell-ward-profile/",
        "umbraco_id": 12759
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/worsbrough-ward-profile/",
        "umbraco_id": 12760
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/bereavement-support-groups/",
        "umbraco_id": 12792
    },
    {
        "url": "https://www.barnsley.gov.uk/carousel-items/",
        "umbraco_id": 12808
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-october-2015/",
        "umbraco_id": 12811
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/help-to-make-decisions-about-your-care-and-support/",
        "umbraco_id": 12844
    },
    {
        "url": "https://www.barnsley.gov.uk/promotions/",
        "umbraco_id": 12859
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/",
        "umbraco_id": 12863
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/councillors-and-e-democracy/",
        "umbraco_id": 12886
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/support-for-businesses/",
        "umbraco_id": 12887
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-plan/our-council-plan/",
        "umbraco_id": 12891
    },
    {
        "url": "https://www.barnsley.gov.uk/redirects/",
        "umbraco_id": 12898
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-publications/",
        "umbraco_id": 12918
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/what-is-a-personal-assistant/",
        "umbraco_id": 12984
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/annual-canvass/",
        "umbraco_id": 12990
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/find-and-employ-a-pa/",
        "umbraco_id": 12992
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/become-a-pa/",
        "umbraco_id": 12993
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/training-for-pas/",
        "umbraco_id": 12994
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/support-for-pas/",
        "umbraco_id": 12995
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/barnsley-pa-finder/pa-code-of-conduct/",
        "umbraco_id": 13003
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/",
        "umbraco_id": 13071
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/could-you-foster/",
        "umbraco_id": 13086
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/steps-to-becoming-a-foster-carer/",
        "umbraco_id": 13087
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/different-types-of-fostering/",
        "umbraco_id": 13088
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/training-for-foster-carers/",
        "umbraco_id": 13089
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/how-much-youll-get-paid/",
        "umbraco_id": 13091
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-educational-child-and-community-psychology-service/",
        "umbraco_id": 13102
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/",
        "umbraco_id": 13104
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/gritting/",
        "umbraco_id": 13155
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/report-flooding/",
        "umbraco_id": 13184
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/support-for-foster-carers/",
        "umbraco_id": 13241
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/barnsley-safe-places/",
        "umbraco_id": 13400
    },
    {
        "url": "https://www.barnsley.gov.uk/apply-for-it/report-a-pothole-rk-test/",
        "umbraco_id": 13415
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-educational-child-and-community-psychology-service/what-you-can-expect-from-educational-psychology-involvement/",
        "umbraco_id": 13439
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/public-space-protection-order-pspo-barnsley-town-centre/",
        "umbraco_id": 13484
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/fostering-information-sessions/",
        "umbraco_id": 13488
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-educational-child-and-community-psychology-service/meet-the-educational-child-and-community-psychology-service-team/",
        "umbraco_id": 13498
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/our-statutory-role/",
        "umbraco_id": 13534
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/schools-and-academies-responsibilities/",
        "umbraco_id": 13535
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-educational-child-and-community-psychology-service/useful-resources/",
        "umbraco_id": 13542
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/our-traded-services-offer/",
        "umbraco_id": 13593
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/buy-education-welfare-services/",
        "umbraco_id": 13597
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/our-reports/barnsley-public-health-strategy/",
        "umbraco_id": 13671
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/",
        "umbraco_id": 13889
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/meet-the-barnsley-education-welfare-service-team/",
        "umbraco_id": 13978
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-education-welfare-service/useful-resources/",
        "umbraco_id": 13979
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-attendance-and-absence/",
        "umbraco_id": 14023
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/educating-your-child-at-home/",
        "umbraco_id": 14025
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/children-in-entertainment/",
        "umbraco_id": 14026
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/children-missing-education/",
        "umbraco_id": 14028
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/child-employment/",
        "umbraco_id": 14029
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/chaperones/",
        "umbraco_id": 14030
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/",
        "umbraco_id": 14126
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/",
        "umbraco_id": 14127
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/",
        "umbraco_id": 14128
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/",
        "umbraco_id": 14132
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/report-a-damaged-bridge/",
        "umbraco_id": 14136
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/adopted-roads/",
        "umbraco_id": 14137
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/speed-limits/",
        "umbraco_id": 14138
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/report-damage-to-a-retaining-wall/",
        "umbraco_id": 14139
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/road-safety-schemes/",
        "umbraco_id": 14141
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/pedestrian-crossings/",
        "umbraco_id": 14143
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/school-crossing-patrols/",
        "umbraco_id": 14145
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/vehicle-weight-and-width-limits/",
        "umbraco_id": 14153
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/report-a-problem-with-a-drain-or-gully/",
        "umbraco_id": 14154
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/report-a-pavement-or-road-obstruction/",
        "umbraco_id": 14155
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-safety/moving-heavy-abnormal-loads-on-a-road/",
        "umbraco_id": 14156
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/events-street-parties-parades-and-demonstrations/",
        "umbraco_id": 14159
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/traffic-lights-road-signs-and-markings/",
        "umbraco_id": 14160
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/licences-for-building-materials/",
        "umbraco_id": 14161
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/licences-for-scaffolding-and-hoardings/",
        "umbraco_id": 14163
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/traffic-lights-road-signs-and-markings/road-signs-and-markings/",
        "umbraco_id": 14164
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/licences-for-skip-operators/",
        "umbraco_id": 14165
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/licences-for-street-cafes/",
        "umbraco_id": 14167
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/licences-for-roadworks/",
        "umbraco_id": 14168
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/traffic-lights-road-signs-and-markings/traffic-lights/",
        "umbraco_id": 14170
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/structures-above-a-road/",
        "umbraco_id": 14172
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/cellars-pavement-lights-and-ventilation/",
        "umbraco_id": 14173
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/street-displays-and-advertising-boards/",
        "umbraco_id": 14174
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/residents-parking-permits/",
        "umbraco_id": 14175
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/dropped-kerbs/",
        "umbraco_id": 14177
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/mot-testing/",
        "umbraco_id": 14180
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/report-obstructive-parking/",
        "umbraco_id": 14181
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/parking-fines-and-enforcement/",
        "umbraco_id": 14184
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/car-parks-and-on-street-parking/",
        "umbraco_id": 14187
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/independent-travel-training/",
        "umbraco_id": 14263
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/supported-employment-and-volunteering/",
        "umbraco_id": 14265
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/autistic-spectrum-conditions/",
        "umbraco_id": 14270
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/dementia/",
        "umbraco_id": 14274
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/support-for-terminally-ill-people/",
        "umbraco_id": 14276
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/preparing-for-adulthood/",
        "umbraco_id": 14283
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/incontinence/",
        "umbraco_id": 14286
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/flu/",
        "umbraco_id": 14287
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/infant-feeding/",
        "umbraco_id": 14292
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/protecting-your-health/vaccinations/",
        "umbraco_id": 14294
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/young-people/young-carers/",
        "umbraco_id": 14301
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/healthwatch/",
        "umbraco_id": 14304
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/personal-budgets/",
        "umbraco_id": 14305
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/help-with-your-mental-health/the-mental-capacity-act/",
        "umbraco_id": 14311
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-terms-and-holidays/",
        "umbraco_id": 14337
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/adoption/",
        "umbraco_id": 14373
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/traffic-lights-road-signs-and-markings/yellow-lines/",
        "umbraco_id": 14490
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/roadworks/",
        "umbraco_id": 14527
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/report-a-pothole/",
        "umbraco_id": 14529
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/yorkshire-common-permit-scheme/",
        "umbraco_id": 14530
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/apply-to-close-a-road/",
        "umbraco_id": 14533
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/",
        "umbraco_id": 14536
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/street-lights-bollards-and-furniture/",
        "umbraco_id": 14538
    },
    {
        "url": "https://www.barnsley.gov.uk/services/get-online-with-us/barnsley-fiori-application-support/",
        "umbraco_id": 14552
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/",
        "umbraco_id": 14553
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/street-lights-bollards-and-furniture/street-lights-and-illuminated-bollards/",
        "umbraco_id": 14554
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/street-lights-bollards-and-furniture/report-damaged-street-furniture/",
        "umbraco_id": 14555
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/report-a-damaged-pavement/",
        "umbraco_id": 14581
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/road-spillages-and-debris/",
        "umbraco_id": 14584
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/litter/",
        "umbraco_id": 14585
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/dog-fouling/",
        "umbraco_id": 14586
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/dog-waste-bins/",
        "umbraco_id": 14587
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/graffiti/",
        "umbraco_id": 14588
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/dead-animals/",
        "umbraco_id": 14589
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/abandoned-trolleys/",
        "umbraco_id": 14590
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/residents-parking-permit-supporting-documents/",
        "umbraco_id": 14596
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/order-a-bin/",
        "umbraco_id": 14597
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-self-build-register/",
        "umbraco_id": 14612
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/support-for-children-with-hivaids/",
        "umbraco_id": 14660
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/our-reports/child-and-family-poverty/",
        "umbraco_id": 14661
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/",
        "umbraco_id": 14665
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/barnsley-interactive-map/",
        "umbraco_id": 14666
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/authority-land-and-property/",
        "umbraco_id": 14668
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/listed-buildings-and-historic-parks-and-gardens/",
        "umbraco_id": 14669
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/free-school-meals/",
        "umbraco_id": 14678
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/",
        "umbraco_id": 14680
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/primary-school-places/",
        "umbraco_id": 14681
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/secondary-school-places/",
        "umbraco_id": 14682
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/appeals/",
        "umbraco_id": 14683
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/transferring-schools/",
        "umbraco_id": 14684
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/school-places-outside-barnsley/",
        "umbraco_id": 14685
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/admission-arrangements/",
        "umbraco_id": 14686
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/school-admission-preference-statistics/",
        "umbraco_id": 14687
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/mi-card-travel-passes/",
        "umbraco_id": 14708
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/assets-of-community-value-and-right-to-bid/",
        "umbraco_id": 14732
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/public-rights-of-way/",
        "umbraco_id": 14741
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/",
        "umbraco_id": 14744
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/planning-applications/",
        "umbraco_id": 14745
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/gritting-routes-and-grit-bin-locations/",
        "umbraco_id": 14746
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/berneslai-homes-locations/",
        "umbraco_id": 14762
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-in-barnsley/",
        "umbraco_id": 14935
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-governors/",
        "umbraco_id": 14941
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-governors/becoming-a-school-governor/",
        "umbraco_id": 14942
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-governors/newsletter-and-governor-development-opportunities-2022/",
        "umbraco_id": 14943
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-governors/what-school-governors-do/",
        "umbraco_id": 14950
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/family-centres/",
        "umbraco_id": 15018
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/complaints-about-schools/",
        "umbraco_id": 15019
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-privacy-notices/",
        "umbraco_id": 15039
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/",
        "umbraco_id": 15040
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/traveller-children/",
        "umbraco_id": 15046
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-admissions-and-transfers/how-we-organise-school-places/",
        "umbraco_id": 15050
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-forum/",
        "umbraco_id": 15054
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-forum/schools-forum-membership/",
        "umbraco_id": 15055
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-forum/schools-forum-members-protocol/",
        "umbraco_id": 15056
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-forum/schools-forum-minutes/",
        "umbraco_id": 15057
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/residents-parking-zones/",
        "umbraco_id": 15089
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/",
        "umbraco_id": 15143
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/senior-officer-salaries/",
        "umbraco_id": 15147
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/expenditure-over-gbp500/",
        "umbraco_id": 15148
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-for-children-who-are-new-to-the-uk/",
        "umbraco_id": 15150
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/section-278-agreement-for-developers/",
        "umbraco_id": 15162
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/",
        "umbraco_id": 15190
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/local-access-forum/",
        "umbraco_id": 15191
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/maintaining-public-rights-of-way/",
        "umbraco_id": 15192
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/closing-or-diverting-a-public-right-of-way/",
        "umbraco_id": 15193
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/open-access-land/",
        "umbraco_id": 15197
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/public-rights-of-way/",
        "umbraco_id": 15198
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/the-definitive-map-and-statement/",
        "umbraco_id": 15205
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-april-2016/",
        "umbraco_id": 15216
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/get-help-if-youre-being-bullied/",
        "umbraco_id": 15229
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/excluding-pupils-from-school/",
        "umbraco_id": 15232
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/sacre-religious-education/",
        "umbraco_id": 15238
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/sacre-membership/",
        "umbraco_id": 15239
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/agreed-syllabus/",
        "umbraco_id": 15240
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/visits-to-support-religious-education/",
        "umbraco_id": 15241
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/",
        "umbraco_id": 15291
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/assessments/",
        "umbraco_id": 15294
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/assessment-teams/",
        "umbraco_id": 15297
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/worried-about-a-child/",
        "umbraco_id": 15312
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/investigating-allegations-of-neglect-or-abuse/",
        "umbraco_id": 15314
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/child-sexual-exploitation/",
        "umbraco_id": 15320
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/court-orders/",
        "umbraco_id": 15323
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/how-we-use-the-information-you-provide/",
        "umbraco_id": 15325
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/childrens-social-work-matters/",
        "umbraco_id": 15327
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/barnsley-re-trail/",
        "umbraco_id": 15328
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust/",
        "umbraco_id": 15330
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-government-elections-2016/",
        "umbraco_id": 15335
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/police-and-crime-commissioner-elections-2016/",
        "umbraco_id": 15336
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/",
        "umbraco_id": 15366
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/",
        "umbraco_id": 15370
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/",
        "umbraco_id": 15371
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/young-people/",
        "umbraco_id": 15372
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/school-nursery-places/",
        "umbraco_id": 15409
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/free-childcare-for-two-year-olds/",
        "umbraco_id": 15434
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/choosing-childcare/",
        "umbraco_id": 15435
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-education-funding-for-three-and-four-year-olds/",
        "umbraco_id": 15436
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-pupil-premium/",
        "umbraco_id": 15438
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/improving-the-quality-of-childcare/",
        "umbraco_id": 15440
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/finding-services-and-things-to-do/",
        "umbraco_id": 15444
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/breakfast-clubs/",
        "umbraco_id": 15451
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-assessment-and-performance/",
        "umbraco_id": 15452
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/education-for-children-with-special-educational-needs/",
        "umbraco_id": 15455
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/getting-help-if-your-child-has-sen/",
        "umbraco_id": 15456
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/special-educational-needs-assessment/",
        "umbraco_id": 15457
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/education-health-and-care-plans/",
        "umbraco_id": 15460
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-curriculum/",
        "umbraco_id": 15464
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/16-19-bursary-fund/",
        "umbraco_id": 15465
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-workforce-development/",
        "umbraco_id": 15467
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/16-19-bursary-fund/see-if-you-qualify-for-the-bursary/",
        "umbraco_id": 15468
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-workforce-development/newly-qualified-teachers/",
        "umbraco_id": 15469
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-workforce-development/professional-development-for-school-support-staff/",
        "umbraco_id": 15471
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-workforce-development/training-and-development-online/",
        "umbraco_id": 15472
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-workforce-development/useful-documents/",
        "umbraco_id": 15473
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-visits-and-outdoor-learning/",
        "umbraco_id": 15498
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/music-education/",
        "umbraco_id": 15499
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/music-education/barnsley-music-service/",
        "umbraco_id": 15500
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/public-footpaths-and-rights-of-way/statutory-registers/",
        "umbraco_id": 15595
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/",
        "umbraco_id": 15598
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/",
        "umbraco_id": 15615
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/find-out-if-you-need-building-approval/",
        "umbraco_id": 15616
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/submit-an-application/",
        "umbraco_id": 15617
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/book-an-inspection/",
        "umbraco_id": 15618
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/get-permission-to-demolish-a-building/",
        "umbraco_id": 15619
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/report-a-dangerous-building/",
        "umbraco_id": 15620
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/register-street-names-and-numbers/",
        "umbraco_id": 15621
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/unauthorised-building-work/",
        "umbraco_id": 15622
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/report-building-site-noise-or-pollution/",
        "umbraco_id": 15623
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/building-control/become-a-building-control-partner/",
        "umbraco_id": 15637
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/business-waste/",
        "umbraco_id": 15667
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/business-waste/business-waste-collections/",
        "umbraco_id": 15668
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/business-waste/re-order-pre-paid-bags-for-business-waste/",
        "umbraco_id": 15671
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/business-waste/cancel-or-change-your-contract-with-us/",
        "umbraco_id": 15672
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/business-waste/spillages-of-business-waste/",
        "umbraco_id": 15673
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/discarded-needles-and-syringes/",
        "umbraco_id": 15675
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/get-help-to-put-your-bins-out/",
        "umbraco_id": 15682
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/putting-your-bin-out-for-collection/",
        "umbraco_id": 15683
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/report-a-spilled-bin/",
        "umbraco_id": 15684
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/ask-for-a-new-bin-collection/",
        "umbraco_id": 15685
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/fly-tipping/",
        "umbraco_id": 15695
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/",
        "umbraco_id": 15698
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/what-is-early-help/",
        "umbraco_id": 15699
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/sharing-information/",
        "umbraco_id": 15700
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-assessments/",
        "umbraco_id": 15701
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/forms-letters-and-leaflets/",
        "umbraco_id": 15703
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/early-help-training/",
        "umbraco_id": 15704
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/",
        "umbraco_id": 15722
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/thresholds-for-intervention-guidance/",
        "umbraco_id": 15727
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/how-to-get-early-help/",
        "umbraco_id": 15728
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/working-together-to-provide-early-help/",
        "umbraco_id": 15729
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/undertaking-an-early-help-assessment/",
        "umbraco_id": 15730
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/licence-to-run-a-business-involving-animals/",
        "umbraco_id": 15775
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/licence-to-keep-zoo-animals/",
        "umbraco_id": 15779
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/licence-to-keep-exotic-animals/",
        "umbraco_id": 15781
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/report-a-stray-lost-or-dangerous-dog/",
        "umbraco_id": 15782
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/moving-livestock-licences/",
        "umbraco_id": 15783
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/local-government-transparency-code/",
        "umbraco_id": 15796
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/major-incident-response-and-resilience-planning/",
        "umbraco_id": 15816
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-governors/governor-vacancies/",
        "umbraco_id": 15824
    },
    {
        "url": "https://www.barnsley.gov.uk/services/streetcare-and-cleaning/public-toilets/",
        "umbraco_id": 15850
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/report-a-build-up-of-rubbish-at-a-property/",
        "umbraco_id": 15855
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/traffic-lights-road-signs-and-markings/h-markings/",
        "umbraco_id": 15857
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/benefits-help-and-support/refugee-and-asylum-support/",
        "umbraco_id": 15874
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/report-an-animal-welfare-concern/",
        "umbraco_id": 15875
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/keeping-children-safe/",
        "umbraco_id": 15884
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/award-in-caring-for-children/",
        "umbraco_id": 15899
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/",
        "umbraco_id": 15901
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/introduction-to-working-with-children/",
        "umbraco_id": 15903
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/level-2-certificate-in-early-years-care-and-education/",
        "umbraco_id": 15904
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/cache-level-3-diploma-for-the-early-years-workforce/",
        "umbraco_id": 15905
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/english/english-functional-skills/",
        "umbraco_id": 15906
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/level-2-certificate-in-supporting-teaching-and-learning/",
        "umbraco_id": 15907
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/level-3-diploma-in-supporting-teaching-and-learning/",
        "umbraco_id": 15908
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/english/gcse-english/",
        "umbraco_id": 15909
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/maths/maths-functional-skills/",
        "umbraco_id": 15910
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/maths/gcse-maths/",
        "umbraco_id": 15911
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/courses-for-adults-with-learning-difficulties-andor-disabilities/",
        "umbraco_id": 15912
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/english-for-speakers-of-other-languages-esol/",
        "umbraco_id": 15914
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/courses-for-adults-with-learning-difficulties-andor-disabilities/cookery/",
        "umbraco_id": 15915
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/courses-for-adults-with-learning-difficulties-andor-disabilities/creative-craft/",
        "umbraco_id": 15918
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/courses-for-adults-with-learning-difficulties-andor-disabilities/fun-with-english/",
        "umbraco_id": 15920
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/courses-for-adults-with-learning-difficulties-andor-disabilities/making-the-most-of-your-money/",
        "umbraco_id": 15934
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/food-safety/",
        "umbraco_id": 15944
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/level-2-award-in-food-safety/",
        "umbraco_id": 15946
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/level-2-award-in-health-and-safety-in-the-workplace/",
        "umbraco_id": 15953
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/level-2-award-in-principles-of-manual-handling/",
        "umbraco_id": 15954
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/",
        "umbraco_id": 15958
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/key-strategies/",
        "umbraco_id": 16038
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/supporting-strategies-and-policies/",
        "umbraco_id": 16065
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/ask-us-to-collect-large-unwanted-items/",
        "umbraco_id": 16070
    },
    {
        "url": "https://www.barnsley.gov.uk/services/media-and-advertising/",
        "umbraco_id": 16095
    },
    {
        "url": "https://www.barnsley.gov.uk/services/media-and-advertising/filming-and-photography-in-barnsley/",
        "umbraco_id": 16096
    },
    {
        "url": "https://www.barnsley.gov.uk/services/media-and-advertising/media-enquiries/",
        "umbraco_id": 16098
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/domestic-abuse-and-sexual-violence/",
        "umbraco_id": 16116
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/domestic-homicide-review-dhr/",
        "umbraco_id": 16117
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/how-to-enrol/",
        "umbraco_id": 16185
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/paying-for-a-course/",
        "umbraco_id": 16187
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/tell-us-what-you-think/",
        "umbraco_id": 16189
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/learning-centres/",
        "umbraco_id": 16285
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-management-team/",
        "umbraco_id": 16308
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/support-for-learners/",
        "umbraco_id": 16339
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/maths/",
        "umbraco_id": 16372
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/it-and-digital-skills/",
        "umbraco_id": 16376
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/english/",
        "umbraco_id": 16377
    },
    {
        "url": "https://www.barnsley.gov.uk/services/emergencies/",
        "umbraco_id": 16416
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/",
        "umbraco_id": 16498
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/deprivation/",
        "umbraco_id": 16500
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/courses-for-adults-with-learning-difficulties-andor-disabilities/preparation-for-work/",
        "umbraco_id": 16528
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/births/",
        "umbraco_id": 16588
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/births/register-a-birth/",
        "umbraco_id": 16589
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/births/making-changes-to-a-birth-certificate/",
        "umbraco_id": 16590
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/births/baby-naming-ceremonies/",
        "umbraco_id": 16591
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/family-history-and-searches/",
        "umbraco_id": 16593
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/family-history-and-searches/researching-your-family-history/",
        "umbraco_id": 16594
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/order-copy-certificates/",
        "umbraco_id": 16596
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/where-we-are-and-how-to-contact-registrars/",
        "umbraco_id": 16597
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/",
        "umbraco_id": 16598
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/registration-charges/",
        "umbraco_id": 16599
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/arranging-your-civil-partnership/",
        "umbraco_id": 16601
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/converting-a-civil-partnership-to-a-marriage/",
        "umbraco_id": 16603
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/documents-needed-for-giving-notice-of-a-marriage-or-civil-partnership/",
        "umbraco_id": 16604
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/giving-notice-of-a-marriage-or-civil-partnership/",
        "umbraco_id": 16606
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/renewing-your-vows/",
        "umbraco_id": 16607
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/wedding-venue-licences-for-religious-buildings/",
        "umbraco_id": 16608
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/",
        "umbraco_id": 16609
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/youth-offending/",
        "umbraco_id": 16610
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/anti-social-behaviour/",
        "umbraco_id": 16619
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/crime-prevention/",
        "umbraco_id": 16621
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/criminal-damage/",
        "umbraco_id": 16622
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/hate-and-harassment/",
        "umbraco_id": 16623
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/hoax-calls-to-emergency-services/",
        "umbraco_id": 16624
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/home-security/",
        "umbraco_id": 16625
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/neighbour-nuisance/",
        "umbraco_id": 16628
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/malicious-or-nuisance-communication/",
        "umbraco_id": 16631
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/solvent-abuse/",
        "umbraco_id": 16632
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/street-drinking/",
        "umbraco_id": 16633
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/safer-neighbourhood-teams/",
        "umbraco_id": 16634
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/food-premises-licences/",
        "umbraco_id": 16681
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/acupuncture-licences/",
        "umbraco_id": 16682
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/personal-licences-alcohol/",
        "umbraco_id": 16685
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/caravan-sites-planning-permission/",
        "umbraco_id": 16692
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/charities-licences/charitable-house-to-house-collections-licence/",
        "umbraco_id": 16693
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/charities-licences/charitable-street-collections-licence/",
        "umbraco_id": 16694
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/",
        "umbraco_id": 16705
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/complaints-about-food-businesses/",
        "umbraco_id": 16710
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/greyhound-track-licences/",
        "umbraco_id": 16712
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/food-hygiene-and-safety/food-safety-inspections/",
        "umbraco_id": 16713
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/food-hygiene-and-safety/food-hygiene-ratings/",
        "umbraco_id": 16715
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/hypnotism-licences/",
        "umbraco_id": 16716
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/lotteries-licences/",
        "umbraco_id": 16718
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/food-labelling-and-regulations/",
        "umbraco_id": 16721
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/civil-ceremony-venues-and-licences/",
        "umbraco_id": 16722
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/apply-for-a-premises-licence/",
        "umbraco_id": 16725
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/scrap-metal-dealer-licences/",
        "umbraco_id": 16727
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/second-hand-goods-licences/",
        "umbraco_id": 16728
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/sex-establishment-licences/",
        "umbraco_id": 16729
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/abandoned-vehicles/",
        "umbraco_id": 16732
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/track-betting-licences/",
        "umbraco_id": 16734
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/tattooist-piercing-and-electrolysis-licences/",
        "umbraco_id": 16733
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/charities-licences/voluntary-and-charities-mini-bus-licences/",
        "umbraco_id": 16735
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/waste-carriers-licences/",
        "umbraco_id": 16737
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/road-licences/weighbridge-operators-licences/",
        "umbraco_id": 16738
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/register-a-stillborn-baby/",
        "umbraco_id": 16778
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/",
        "umbraco_id": 16807
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/what-parish-and-town-councils-do/",
        "umbraco_id": 16808
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/high-hoyland-parish-meeting/",
        "umbraco_id": 16811
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/gunthwaite-and-ingbirchworth-parish-council/",
        "umbraco_id": 16813
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/little-houghton-parish-council/",
        "umbraco_id": 16814
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/wortley-parish-council/",
        "umbraco_id": 16816
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/parish-councillor-register-of-interests/",
        "umbraco_id": 16817
    },
    {
        "url": "https://www.barnsley.gov.uk/services/consumer-protection/consumer-advice-and-trading-standards/",
        "umbraco_id": 16819
    },
    {
        "url": "https://www.barnsley.gov.uk/services/consumer-protection/product-safety/",
        "umbraco_id": 16820
    },
    {
        "url": "https://www.barnsley.gov.uk/services/consumer-protection/under-age-sales/",
        "umbraco_id": 16821
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/",
        "umbraco_id": 16844
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/gambling-premises-licences/",
        "umbraco_id": 16849
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/the-gambling-act-2005-and-our-responsibilities/",
        "umbraco_id": 16850
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/tree-preservation-orders/",
        "umbraco_id": 16895
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/planning-constraints/",
        "umbraco_id": 16896
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/variation-to-premises-licence/",
        "umbraco_id": 16946
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/minor-variation-to-premises-licence/",
        "umbraco_id": 16947
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/transfer-a-premises-licence-to-another-person/",
        "umbraco_id": 16948
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/designated-premises-supervisor-dps/",
        "umbraco_id": 16949
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/interim-authority-notice/",
        "umbraco_id": 16950
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/licensing-act-2003/",
        "umbraco_id": 16951
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/provisional-statement/",
        "umbraco_id": 16952
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/change-of-licence-holder-name-and-address/",
        "umbraco_id": 16953
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/change-of-premises-name/",
        "umbraco_id": 16954
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/review-of-premises-licences-and-certificates/",
        "umbraco_id": 16955
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/notification-of-interest/",
        "umbraco_id": 16957
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/langsett-parish-council/",
        "umbraco_id": 16974
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/premises-licence-supporting-documents-and-definitions/",
        "umbraco_id": 16983
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/premises-licence-approval-process/",
        "umbraco_id": 16984
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/responsible-authorities/",
        "umbraco_id": 16985
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/smoking-and-licensed-premises/",
        "umbraco_id": 16986
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/",
        "umbraco_id": 16988
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/premises-licence-fees-and-charges/",
        "umbraco_id": 16996
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/premises-licences-advertising/",
        "umbraco_id": 17009
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/grants-to-voluntary-community-and-social-enterprise-organisations/",
        "umbraco_id": 17010
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/tenders-over-gbp5000/",
        "umbraco_id": 17011
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/waste-contracts/",
        "umbraco_id": 17012
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/council-land/",
        "umbraco_id": 17013
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/social-housing-asset-value/",
        "umbraco_id": 17014
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/organisational-chart/",
        "umbraco_id": 17015
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/trade-union-facility-time/",
        "umbraco_id": 17016
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/pay-policy-statements/",
        "umbraco_id": 17017
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/fraud-data/",
        "umbraco_id": 17018
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/constitution/",
        "umbraco_id": 17019
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/parking-account/",
        "umbraco_id": 17022
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/parking-spaces/",
        "umbraco_id": 17023
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/hiring-a-park-or-public-space/",
        "umbraco_id": 17038
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/",
        "umbraco_id": 17044
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/gaming-machines-licences/",
        "umbraco_id": 17045
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/gambling-licences-responsible-authorities/",
        "umbraco_id": 17048
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/community-premises/",
        "umbraco_id": 17049
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/government-procurement-card-gpc/",
        "umbraco_id": 17050
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/",
        "umbraco_id": 17079
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/value-for-money/",
        "umbraco_id": 17080
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/annual-accounts/",
        "umbraco_id": 17081
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/",
        "umbraco_id": 17082
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-meals/",
        "umbraco_id": 17083
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/charities-licences/",
        "umbraco_id": 17098
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/street-trading/",
        "umbraco_id": 17102
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/adult-social-care-performance/",
        "umbraco_id": 17143
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/fly-posting/",
        "umbraco_id": 17148
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/advertising/",
        "umbraco_id": 17150
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/registering-a-food-business/",
        "umbraco_id": 17151
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/food-hygiene-and-safety/",
        "umbraco_id": 17152
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/food-hygiene-and-safety/food-hygiene-regulations/",
        "umbraco_id": 17153
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/food-businesses/food-poisoning/",
        "umbraco_id": 17155
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/",
        "umbraco_id": 17165
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/buying-or-renting-our-land-and-property/",
        "umbraco_id": 17166
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/business-centres/",
        "umbraco_id": 17167
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/available-land-and-property/",
        "umbraco_id": 17168
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/workplace-health/",
        "umbraco_id": 17171
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/workplace-health/workplace-health-support-for-employers/",
        "umbraco_id": 17172
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/workplace-health/workplace-health-champions/",
        "umbraco_id": 17173
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/workplace-health/businesses-on-board/",
        "umbraco_id": 17174
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/workplace-health/be-wellatwork-award/",
        "umbraco_id": 17175
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/workplace-health/workplace-health-resources/",
        "umbraco_id": 17177
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/national-cycle-network/",
        "umbraco_id": 17194
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/procurement-contracts/",
        "umbraco_id": 17201
    },
    {
        "url": "https://www.barnsley.gov.uk/services/get-online-with-us/",
        "umbraco_id": 17203
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/support-to-get-online/",
        "umbraco_id": 17205
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/report-a-missed-bin/",
        "umbraco_id": 17367
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/sports-ground-safety/",
        "umbraco_id": 17372
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/neighbourhood-watch/",
        "umbraco_id": 17400
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsleys-twin-towns/",
        "umbraco_id": 17417
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/farm-parks/",
        "umbraco_id": 17419
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/environmental-crime/",
        "umbraco_id": 17439
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/working-with-communities-to-tackle-crime/",
        "umbraco_id": 17478
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/disabled-facilities-grants/",
        "umbraco_id": 17482
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/right-to-buy-scheme/",
        "umbraco_id": 17485
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/housing-strategies/housing-strategy/",
        "umbraco_id": 17486
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/affordable-housing/",
        "umbraco_id": 17487
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/gypsy-and-traveller-sites/",
        "umbraco_id": 17489
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-landlords/advice-for-landlords/",
        "umbraco_id": 17491
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/land-and-property-searches/",
        "umbraco_id": 17492
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/land-and-property-searches/geotechnology-and-mining-searches/",
        "umbraco_id": 17493
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/land-and-property-searches/personal-searches-of-the-land-charges-register/",
        "umbraco_id": 17495
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/land-and-property-searches/local-authority-searches/",
        "umbraco_id": 17496
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/empty-homes/report-a-problem-with-an-empty-home/",
        "umbraco_id": 17498
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-landlords/houses-in-multiple-occupation-hmo/",
        "umbraco_id": 17499
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-landlords/landlord-accreditation-scheme/",
        "umbraco_id": 17500
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/report-a-private-property-causing-public-health-problems/",
        "umbraco_id": 17548
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-tenants/advice-for-private-tenants/",
        "umbraco_id": 17550
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/empty-homes/",
        "umbraco_id": 17553
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/empty-homes/advice-if-you-own-an-empty-home/",
        "umbraco_id": 17554
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pest-control/",
        "umbraco_id": 17566
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/report-a-nuisance/report-a-noise-problem/",
        "umbraco_id": 17567
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/air-pollution/",
        "umbraco_id": 17581
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/air-pollution/air-quality/",
        "umbraco_id": 17582
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/air-pollution/report-a-smoke-problem/",
        "umbraco_id": 17583
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/air-pollution/report-an-odour-problem/",
        "umbraco_id": 17586
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/apply-for-a-new-taxi-drivers-licence/",
        "umbraco_id": 17672
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/hackney-carriage-and-private-hire-vehicle-licences/",
        "umbraco_id": 17677
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/private-hire-operator-licences/",
        "umbraco_id": 17678
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/hackney-carriage-fares/",
        "umbraco_id": 17679
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/report-an-accident-involving-a-taxi/",
        "umbraco_id": 17680
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/new-taxi-rank-applications/",
        "umbraco_id": 17681
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/asbestos-disposal/",
        "umbraco_id": 17684
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/report-a-nuisance/report-construction-pollution/",
        "umbraco_id": 17685
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/renew-a-taxi-drivers-licence/",
        "umbraco_id": 17692
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/report-a-nuisance/report-contaminated-land/",
        "umbraco_id": 17696
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/water-pollution/",
        "umbraco_id": 17699
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/water-pollution/pollution-of-groundwater-rivers-lakes-and-streams/",
        "umbraco_id": 17700
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/water-pollution/tap-water-quality/",
        "umbraco_id": 17701
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/water-pollution/private-water-supplies/",
        "umbraco_id": 17702
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/apply-for-an-industrial-emissions-permit/",
        "umbraco_id": 17703
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/report-a-nuisance/report-light-pollution/",
        "umbraco_id": 17704
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/air-pollution/vehicle-pollution/",
        "umbraco_id": 17705
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/smoking-ban-enforcement/",
        "umbraco_id": 17711
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/canals-and-reservoirs/",
        "umbraco_id": 17719
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/healthy-start/",
        "umbraco_id": 17731
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/animal-feed-and-fertiliser-regulations/",
        "umbraco_id": 17820
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/countryside-education-and-events/",
        "umbraco_id": 17821
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/countryside-rangers/",
        "umbraco_id": 17822
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/conservation-areas/",
        "umbraco_id": 17825
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/development-in-conservation-areas/",
        "umbraco_id": 17849
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/listed-buildings/",
        "umbraco_id": 17850
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/listed-building-consent/",
        "umbraco_id": 17851
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/archaeology-and-ancient-monuments/",
        "umbraco_id": 17854
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/equality-diversity-and-inclusion/",
        "umbraco_id": 17886
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/bsl-video-relay-service/",
        "umbraco_id": 17888
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/access-for-disabled-people/",
        "umbraco_id": 17892
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/managing-our-green-spaces/",
        "umbraco_id": 17893
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/wildlife-conservation-and-biodiversity/",
        "umbraco_id": 17894
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/maintenance-and-landscaping-services/",
        "umbraco_id": 17902
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/",
        "umbraco_id": 17960
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/dearne-by-election-2015/",
        "umbraco_id": 18013
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/uk-parliamentary-election-2015/",
        "umbraco_id": 18014
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-elections-2015/",
        "umbraco_id": 18015
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/parish-council-elections-2015/",
        "umbraco_id": 18016
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/police-and-crime-commissioner-by-election-2014/",
        "umbraco_id": 18017
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/penistone-west-ward-by-election-2014/",
        "umbraco_id": 18018
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/european-parliamentary-election-2014/",
        "umbraco_id": 18019
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/early-help-surgery/",
        "umbraco_id": 18020
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/royston-ward-by-election-2013/",
        "umbraco_id": 18028
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/wombwell-ward-by-election-2013/",
        "umbraco_id": 18029
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/police-and-crime-commissioner-elections-2012/",
        "umbraco_id": 18030
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-government-elections-2014/",
        "umbraco_id": 18031
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-elections-2012/",
        "umbraco_id": 18032
    },
    {
        "url": "https://www.barnsley.gov.uk/services/consumer-protection/weights-and-measures/",
        "umbraco_id": 18056
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/commercial-and-housing-developments/",
        "umbraco_id": 18267
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/apply-for-planning-permission/",
        "umbraco_id": 18268
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/home-improvements-and-building-work/",
        "umbraco_id": 18269
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/planning-application-fees/",
        "umbraco_id": 18270
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/carrying-out-building-work-without-planning-permission/",
        "umbraco_id": 18271
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/making-a-planning-appeal/",
        "umbraco_id": 18272
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/the-planning-process/",
        "umbraco_id": 18273
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/planning-application-forms/",
        "umbraco_id": 18274
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/planning-applications-for-businesses/",
        "umbraco_id": 18275
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/renewable-energy/",
        "umbraco_id": 18277
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/pre-application-advice-for-historic-buildings-and-places/",
        "umbraco_id": 18276
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/using-planning-explorer/",
        "umbraco_id": 18278
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/commercial-and-housing-developments/pre-application-advice-for-developments/",
        "umbraco_id": 18280
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/commercial-and-housing-developments/wind-energy/",
        "umbraco_id": 18281
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/commercial-and-housing-developments/section-106-agreements/",
        "umbraco_id": 18282
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/home-improvements-and-building-work/pre-application-advice-for-homeowners/",
        "umbraco_id": 18283
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/home-improvements-and-building-work/find-out-if-you-need-planning-permission/",
        "umbraco_id": 18284
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/commercial-and-housing-developments/building-and-landscape-design/",
        "umbraco_id": 18285
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/planning-permission-for-adverts-and-signs/",
        "umbraco_id": 18287
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/view-or-comment-on-planning-applications/",
        "umbraco_id": 18288
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/high-hedge-disputes/",
        "umbraco_id": 18289
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/",
        "umbraco_id": 18291
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/supplementary-planning-documents/",
        "umbraco_id": 18295
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/",
        "umbraco_id": 18297
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/planning-policy/",
        "umbraco_id": 18298
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/neighbourhood-planning/neighbourhood-plans/",
        "umbraco_id": 18300
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/local-plan-consultations/",
        "umbraco_id": 18311
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/local-plan-research-and-evidence-documents/",
        "umbraco_id": 18318
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/barnsleys-local-plan/",
        "umbraco_id": 18320
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/neighbourhood-planning/neighbourhood-planning-applications/",
        "umbraco_id": 18324
    },
    {
        "url": "https://www.barnsley.gov.uk/services/media-and-advertising/barnsley-council-social-media-acceptable-use-policy/",
        "umbraco_id": 18331
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/green-belt-review/",
        "umbraco_id": 18410
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/",
        "umbraco_id": 18419
    },
    {
        "url": "https://www.barnsley.gov.uk/services/land-and-property/register-of-common-land/",
        "umbraco_id": 18503
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/development-and-flood-risk/",
        "umbraco_id": 18504
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/surface-water-management-plans/",
        "umbraco_id": 18508
    },
    {
        "url": "https://www.barnsley.gov.uk/services/ways-to-pay/",
        "umbraco_id": 18514
    },
    {
        "url": "https://www.barnsley.gov.uk/services/finding-it-difficult-to-pay/",
        "umbraco_id": 18533
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/protecting-your-health/health-checks/",
        "umbraco_id": 18541
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/protecting-your-health/cancer-screening-and-support/",
        "umbraco_id": 18542
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/video-help-guides/",
        "umbraco_id": 18543
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/protecting-your-health/infectious-diseases/",
        "umbraco_id": 18555
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/sexual-health/",
        "umbraco_id": 18561
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-for-children-who-cant-attend-school-because-of-health-needs/",
        "umbraco_id": 18581
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/health-and-safety-at-work/business-health-and-safety-regulations/",
        "umbraco_id": 18582
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/video-help-guides/online-skills-videos/",
        "umbraco_id": 18597
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/video-help-guides/online-skills-videos/creating-an-email-account/",
        "umbraco_id": 18598
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/video-help-guides/online-skills-videos/sending-an-email-and-attachments/",
        "umbraco_id": 18599
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/lane-gating/",
        "umbraco_id": 18604
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/rabies-control-and-prevention/",
        "umbraco_id": 18608
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/importing-animals/",
        "umbraco_id": 18609
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/cooling-tower-registration/",
        "umbraco_id": 18610
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/septic-tank-and-cesspit-emptying/",
        "umbraco_id": 18626
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/household-waste-and-recycling-centres/",
        "umbraco_id": 18693
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/report-a-problem-with-a-tree/",
        "umbraco_id": 18741
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/",
        "umbraco_id": 19337
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/abigale/",
        "umbraco_id": 19338
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/ali-and-ibraheem/",
        "umbraco_id": 19339
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/phoebe/",
        "umbraco_id": 19340
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/brandon/",
        "umbraco_id": 19341
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/dom-and-ella/",
        "umbraco_id": 19342
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-young-people-and-families-trust-videos/parish/",
        "umbraco_id": 19343
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/our-reports/pharmaceutical-needs-assessment/",
        "umbraco_id": 19355
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/",
        "umbraco_id": 19465
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/send-strategy-guidance-and-supporting-documents/",
        "umbraco_id": 19468
    },
    {
        "url": "https://www.barnsley.gov.uk/business-services/",
        "umbraco_id": 19499
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/taxi-licence-checks/",
        "umbraco_id": 19744
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/",
        "umbraco_id": 20059
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/interview-tips/",
        "umbraco_id": 20062
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/working-for-us/",
        "umbraco_id": 20064
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/future-carers-programme/",
        "umbraco_id": 20065
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/help-with-your-application/",
        "umbraco_id": 20067
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/living-and-working-in-barnsley/",
        "umbraco_id": 20068
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/help-to-find-a-job/",
        "umbraco_id": 20069
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/equality-and-diversity/",
        "umbraco_id": 20070
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/council-structure/",
        "umbraco_id": 20071
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/jobs-and-training-for-disabled-people/",
        "umbraco_id": 20072
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/joining-forces/",
        "umbraco_id": 20238
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/our-reports/director-of-public-health-annual-report-2016/",
        "umbraco_id": 20300
    },
    {
        "url": "https://www.barnsley.gov.uk/services/get-online-with-us/advertising-on-our-website/",
        "umbraco_id": 20388
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/local-highways-maintenance-challenge-fund/",
        "umbraco_id": 20389
    },
    {
        "url": "https://www.barnsley.gov.uk/20562",
        "umbraco_id": 20562
    },
    {
        "url": "https://www.barnsley.gov.uk/redirects/app-redirects/",
        "umbraco_id": 20578
    },
    {
        "url": "https://www.barnsley.gov.uk/app/index.html#/dashboard",
        "umbraco_id": 20580
    },
    {
        "url": "https://www.barnsley.gov.uk/app/index.html#/activity",
        "umbraco_id": 20581
    },
    {
        "url": "https://www.barnsley.gov.uk/app/index.html#/settings",
        "umbraco_id": 20582
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/schools-currently-closed/",
        "umbraco_id": 20590
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/how-to-pay-your-council-tax/",
        "umbraco_id": 20623
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/tell-our-council-tax-service-about-a-death/",
        "umbraco_id": 20629
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/council-tax-support/",
        "umbraco_id": 20630
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/reductions-and-reliefs/",
        "umbraco_id": 20658
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/change-your-details-for-business-rates/",
        "umbraco_id": 20659
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/benefits-help-and-support/",
        "umbraco_id": 20701
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/standards-for-the-way-we-work/",
        "umbraco_id": 20727
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-april-2017/",
        "umbraco_id": 20731
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-december-2016/",
        "umbraco_id": 20739
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/general-election-8-june-2017/",
        "umbraco_id": 20762
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/air-pollution/report-a-dust-problem/",
        "umbraco_id": 20773
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/report-a-nuisance/report-insects-from-a-business/",
        "umbraco_id": 20779
    },
    {
        "url": "https://www.barnsley.gov.uk/services/pollution/report-a-nuisance/",
        "umbraco_id": 20782
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/",
        "umbraco_id": 20976
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/",
        "umbraco_id": 20994
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/barnsley-safeguarding-children-partnership/",
        "umbraco_id": 21014
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/",
        "umbraco_id": 21015
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/local-authority-designated-officer-lado/",
        "umbraco_id": 21016
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/how-to-recognise-abuse/",
        "umbraco_id": 21017
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-children-and-young-people/",
        "umbraco_id": 21018
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/what-is-abuse-and-who-abuses/",
        "umbraco_id": 21019
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/worried-about-an-adult/",
        "umbraco_id": 21020
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-news/",
        "umbraco_id": 21021
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/policies-and-procedures/",
        "umbraco_id": 21022
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/worried-about-a-child/",
        "umbraco_id": 21023
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/public-information-and-support/",
        "umbraco_id": 21024
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/",
        "umbraco_id": 21027
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/for-professionals-and-volunteers/",
        "umbraco_id": 21029
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-parents-and-carers/",
        "umbraco_id": 21030
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/child-death-review-process/",
        "umbraco_id": 21033
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/strategic-plan/",
        "umbraco_id": 21038
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/multi-agency-training/",
        "umbraco_id": 21042
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/useful-resources/",
        "umbraco_id": 21044
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/membership/",
        "umbraco_id": 21045
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/local-child-safeguarding-practice-reviews/",
        "umbraco_id": 21049
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/safeguarding-adult-reviews-sars/",
        "umbraco_id": 21050
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/safeguarding-adults-annual-report/",
        "umbraco_id": 21055
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/sub-groups/",
        "umbraco_id": 21060
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/for-schools/",
        "umbraco_id": 21065
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/roles-and-responsibilities/",
        "umbraco_id": 21067
    },
    {
        "url": "https://www.barnsley.gov.uk/this-website-is-temporarily-unavailable/",
        "umbraco_id": 21070
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/zoom-16-18-travel-pass/",
        "umbraco_id": 21140
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/roadworks-and-road-maintenance/report-a-problem-with-roadworks-closures-and-diversions/",
        "umbraco_id": 21245
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-problems-with-roadworks/",
        "umbraco_id": 21247
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/status-reports/",
        "umbraco_id": 21248
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-flooding-and-drainage-issues/",
        "umbraco_id": 21250
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/flooding-advice-and-prevention/",
        "umbraco_id": 21253
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-obstructive-parking/",
        "umbraco_id": 21257
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-damaged-pavements/",
        "umbraco_id": 21265
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-potholes/",
        "umbraco_id": 21271
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-damaged-bridges-and-retaining-walls/",
        "umbraco_id": 21272
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-damaged-or-missing-street-furniture/",
        "umbraco_id": 21273
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/ward-profiles/",
        "umbraco_id": 21275
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-road-and-pavement-obstructions/",
        "umbraco_id": 21276
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/young-people/early-help-and-targeted-support-for-young-people/",
        "umbraco_id": 21365
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-governors/statutory-guidance-summary-reports/",
        "umbraco_id": 21454
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/",
        "umbraco_id": 21488
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/",
        "umbraco_id": 21490
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/the-lord-lieutenant/",
        "umbraco_id": 21491
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/diary-and-events/",
        "umbraco_id": 21493
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/message-from-the-lord-lieutenant-of-south-yorkshire/",
        "umbraco_id": 21494
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/contact-the-lord-lieutenant/",
        "umbraco_id": 21495
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/uniform-and-badges/",
        "umbraco_id": 21497
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/the-lord-lieutenant/the-lord-lieutenants-cadets/",
        "umbraco_id": 21538
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/uniform-and-badges/the-tudor-rose/",
        "umbraco_id": 21539
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/queens-garden-parties/",
        "umbraco_id": 21540
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/the-lord-lieutenant/the-vice-lord-lieutenant/",
        "umbraco_id": 21542
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/the-lord-lieutenant/deputy-lieutenants/",
        "umbraco_id": 21543
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/the-queens-award-for-voluntary-service/",
        "umbraco_id": 21545
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/birthday-and-wedding-anniversary-messages/",
        "umbraco_id": 21547
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/the-elizabeth-cross/",
        "umbraco_id": 21548
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/the-queens-award-for-enterprise/",
        "umbraco_id": 21549
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/citizenship-ceremonies/",
        "umbraco_id": 21551
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/uniform-and-badges/the-lord-lieutenants-flag-and-crest/",
        "umbraco_id": 21552
    },
    {
        "url": "https://www.barnsley.gov.uk/partners/",
        "umbraco_id": 21557
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/early-help-for-families/early-help-toolkit-for-practitioners/step-between-social-care-and-early-help-services/",
        "umbraco_id": 21574
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/brownfield-land-register/",
        "umbraco_id": 21595
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/brownfield-land/",
        "umbraco_id": 21603
    },
    {
        "url": "https://www.barnsley.gov.uk/app/index.html",
        "umbraco_id": 21608
    },
    {
        "url": "https://www.barnsley.gov.uk/atoz",
        "umbraco_id": 21611
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/community-governance-review/",
        "umbraco_id": 21649
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/council-housing/",
        "umbraco_id": 21785
    },
    {
        "url": "https://www.barnsley.gov.uk/services/insurance-claims/",
        "umbraco_id": 21791
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/bsl-videos/",
        "umbraco_id": 22010
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/bsl-videos/council-tax-and-council-tax-support/",
        "umbraco_id": 22014
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/30-hours-free-childcare-for-three-and-four-year-olds/",
        "umbraco_id": 22043
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/kingstone-ward-by-election-28-september-2017/",
        "umbraco_id": 22101
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/supported-internship-programme/",
        "umbraco_id": 22129
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/home-owners/met-homes-new-build-schemes/",
        "umbraco_id": 22150
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/everybodythink-tackling-fly-tipping/",
        "umbraco_id": 22212
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-october-2017/",
        "umbraco_id": 22466
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/waste-service-information-for-developers/",
        "umbraco_id": 22902
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/personal-education-plans-peps/",
        "umbraco_id": 22948
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/our-virtual-school/",
        "umbraco_id": 22950
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/",
        "umbraco_id": 22951
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/newsroom/",
        "umbraco_id": 22952
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/foster-carers/",
        "umbraco_id": 22953
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/social-workers/",
        "umbraco_id": 22954
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/",
        "umbraco_id": 22946
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/something-to-shout-about-lets-celebrate/",
        "umbraco_id": 22955
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/children-in-care-stuff-for-you/",
        "umbraco_id": 22956
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/looked-after-children-lac-reviews/",
        "umbraco_id": 22986
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/social-workers/school-places-for-children-in-care/",
        "umbraco_id": 22988
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/children-in-care-stuff-for-you/we-can-help-you/",
        "umbraco_id": 22989
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/social-workers/social-workers-role-in-the-pep-process/",
        "umbraco_id": 22991
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/early-years/",
        "umbraco_id": 22992
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/attachment-theory/",
        "umbraco_id": 22995
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/policies-and-guidance/",
        "umbraco_id": 22997
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/designated-teacher-annual-report/",
        "umbraco_id": 22998
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/children-in-care-stuff-for-you/your-aspirations/",
        "umbraco_id": 22999
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/children-in-care-stuff-for-you/support-for-your-learning/",
        "umbraco_id": 23000
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/children-in-care-stuff-for-you/your-termly-personal-education-plan-tpep/",
        "umbraco_id": 23002
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/designated-teacher-role/",
        "umbraco_id": 23003
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/education-planning-for-children-in-care-over-16-years/",
        "umbraco_id": 23006
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/social-workers/support-for-social-workers/",
        "umbraco_id": 23007
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/social-workers/advice-and-guidance-from-dfe/",
        "umbraco_id": 23008
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/designated-teachers/support-for-designated-teachers/",
        "umbraco_id": 23009
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/rockingham-ward-by-election-thursday-14-december-2017/",
        "umbraco_id": 23034
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/families-information-service/",
        "umbraco_id": 23057
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/send-parent-participation/",
        "umbraco_id": 23091
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/devolution/",
        "umbraco_id": 23128
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/register-a-death/",
        "umbraco_id": 23218
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/bsl-council-tax-and-council-tax-support/",
        "umbraco_id": 23243
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/department-for-transport-grant-funding-a628/",
        "umbraco_id": 23296
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/tour-de-yorkshire-2020/",
        "umbraco_id": 23304
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/honours-and-awards/previous-honours-and-awards/",
        "umbraco_id": 23484
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/",
        "umbraco_id": 23581
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/send-school-places-strategy-2017-20/",
        "umbraco_id": 23647
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childrens-social-care/childrens-social-care-parent-and-carer-survey/",
        "umbraco_id": 23659
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/send-parent-participation-survey-results/",
        "umbraco_id": 23677
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/paying-council-tax-online/",
        "umbraco_id": 23723
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-government-and-combined-authority-mayoral-elections-thursday-3-may-2018/",
        "umbraco_id": 23816
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01022018-clarification-on-barnsley-market-leases/",
        "umbraco_id": 23831
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01022018-review-of-neighbourhood-services/",
        "umbraco_id": 23832
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14022018-council-reserve-spending/",
        "umbraco_id": 23833
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15022018-childrens-services-budget/",
        "umbraco_id": 23835
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/our-reports/director-of-public-health-annual-report/",
        "umbraco_id": 23853
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/publication-scheme/",
        "umbraco_id": 23858
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14022018-homelessness-reduction-act/",
        "umbraco_id": 23862
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20022018-school-exclusions/",
        "umbraco_id": 23863
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21022018-guarantor-to-the-south-yorkshire-pension-authority/",
        "umbraco_id": 23895
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-landlords/selective-licensing-scheme/",
        "umbraco_id": 23909
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27022018-cockerels-in-allotments/",
        "umbraco_id": 23942
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27022018-selective-licensing/",
        "umbraco_id": 23959
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01032018-closure-of-hope-house-school/",
        "umbraco_id": 23972
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/09032018-gbp200k-project-to-improve-trans-pennine-trail-between-wombwell-and-worsbrough/",
        "umbraco_id": 24019
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/09032018-cars-for-sale-parked-on-residents-parking-verge-sheffield-roadpark-road/",
        "umbraco_id": 24020
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13032018-barnsley-local-elections-may-2018-frequently-asked-questions/",
        "umbraco_id": 24053
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/setting-up-a-my-bentax-account/",
        "umbraco_id": 24055
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/temporary-event-notices/",
        "umbraco_id": 24060
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14032018-celebrity-appearances/",
        "umbraco_id": 24067
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/gender-pay/",
        "umbraco_id": 24068
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16032018-pothole-repairs-following-cold-weather/",
        "umbraco_id": 24082
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16032018-closure-of-wombwell-wood-car-park/",
        "umbraco_id": 24083
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/arranging-your-wedding/",
        "umbraco_id": 24093
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21032018-furlong-roadangel-street-bolton-upon-dearne/",
        "umbraco_id": 24130
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22032018-grange-lane-field/",
        "umbraco_id": 24134
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23032018-road-improvement-plans-for-a628-dodworth-road/",
        "umbraco_id": 24135
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22032018-discussions-with-door-staff-for-training/",
        "umbraco_id": 24136
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23032018-tour-de-yorkshire-blacker-hill/",
        "umbraco_id": 24142
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23032018-programme-of-works-to-remove-potholes/",
        "umbraco_id": 24145
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/information-we-publish/supplier-payment-performance/",
        "umbraco_id": 24174
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29032018-sandy-bridge-lane/",
        "umbraco_id": 24184
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-tenants/problems-paying-your-rent/",
        "umbraco_id": 24198
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/principal-towns/",
        "umbraco_id": 24298
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05042018-school-transport-for-16plus-pupils-with-special-needs/",
        "umbraco_id": 24312
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/bsl-videos/more-and-better-jobs/",
        "umbraco_id": 24325
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-april-2018/",
        "umbraco_id": 24328
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/",
        "umbraco_id": 24406
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/hire-a-bike/",
        "umbraco_id": 24408
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/learn-to-ride-a-bike/",
        "umbraco_id": 24409
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/active-travel/",
        "umbraco_id": 24410
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/cycle-clubs-and-events/",
        "umbraco_id": 24411
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/barnsley-town-centre-races/",
        "umbraco_id": 24413
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/cycle-lanes-and-routes/",
        "umbraco_id": 24414
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/how-we-work-together/health-and-wellbeing-board-register-of-interests/",
        "umbraco_id": 24436
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12042018-be-well-barnsley/",
        "umbraco_id": 24444
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12042018-houghton-road-thurnscoe/",
        "umbraco_id": 24445
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13042018-how-were-tackling-fly-tipping-13042018/",
        "umbraco_id": 24449
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/",
        "umbraco_id": 24451
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/recognised-provider-list-rpl/",
        "umbraco_id": 24465
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/",
        "umbraco_id": 24488
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/group-visits/",
        "umbraco_id": 24504
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/market-tradition/",
        "umbraco_id": 24505
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/",
        "umbraco_id": 24515
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/local-markets/",
        "umbraco_id": 24517
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/trade-at-our-markets/",
        "umbraco_id": 24518
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/click-and-collect/",
        "umbraco_id": 24519
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/",
        "umbraco_id": 24549
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/market-tradition/timeline/",
        "umbraco_id": 24556
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/trade-at-our-markets/trading-at-market-kitchen/",
        "umbraco_id": 24557
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/indoor-market/",
        "umbraco_id": 24560
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/trade-at-our-markets/outdoor-market-trading/",
        "umbraco_id": 24561
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/market-tradition/movies-and-memories/",
        "umbraco_id": 24562
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/trade-at-our-markets/indoor-market-trading/",
        "umbraco_id": 24563
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18042018-our-response-to-the-tax-payers-alliance-story-on-senior-management-pay-18042018/",
        "umbraco_id": 24567
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/social-communication-and-interaction/",
        "umbraco_id": 24585
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27042018-gender-gap-in-educational-outcomes/",
        "umbraco_id": 24656
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27042018-planning-application-clay-pigeon-shoot-27042018/",
        "umbraco_id": 24662
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/vehicle-seizures-for-waste-crimes/",
        "umbraco_id": 24674
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/memorials-at-the-cemetery/",
        "umbraco_id": 24688
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/memorials-at-the-cemetery/designing-a-memorial/",
        "umbraco_id": 24690
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/early-years-and-portage/",
        "umbraco_id": 24728
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/hearing-support/",
        "umbraco_id": 24730
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/vision-support/",
        "umbraco_id": 24731
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/09052018-safer-neighbourhood-service-support-partners/",
        "umbraco_id": 24739
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/work-experience/",
        "umbraco_id": 24787
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/volunteering/",
        "umbraco_id": 24791
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/more-and-better-jobs-employer-promise/",
        "umbraco_id": 24801
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/resource-bank/",
        "umbraco_id": 24837
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/education-inclusion-services/events/",
        "umbraco_id": 24838
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/paying-for-services/",
        "umbraco_id": 24849
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/website-privacy-and-cookies/",
        "umbraco_id": 24850
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/storing-your-information/",
        "umbraco_id": 24851
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/service-specific-privacy-notices/",
        "umbraco_id": 24852
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30052018-ongoing-work-at-cannon-hall-park-and-gardens/",
        "umbraco_id": 24932
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/old-town-ward-by-election-12-july-2018/",
        "umbraco_id": 24974
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/",
        "umbraco_id": 24987
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/safeguarding-in-early-years-settings/",
        "umbraco_id": 25015
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/useful-information-and-documents/",
        "umbraco_id": 25016
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/health-and-safety/",
        "umbraco_id": 25018
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/funding-and-early-years-entitlements/",
        "umbraco_id": 25019
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/working-with-parents/",
        "umbraco_id": 25020
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/learning-and-development/",
        "umbraco_id": 25021
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/",
        "umbraco_id": 25022
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/",
        "umbraco_id": 25023
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/statutory-assessments/",
        "umbraco_id": 25024
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/ofsted/",
        "umbraco_id": 25025
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/leadership-and-management/",
        "umbraco_id": 25026
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/meet-the-team/",
        "umbraco_id": 25027
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/training-and-cpd/",
        "umbraco_id": 25028
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/starting-up/",
        "umbraco_id": 25029
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/market-research/",
        "umbraco_id": 25034
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/business-plans/",
        "umbraco_id": 25036
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/what-is-a-childcare-business/",
        "umbraco_id": 25038
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/staffing-and-recruitment/",
        "umbraco_id": 25039
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/regulation-of-childcare/",
        "umbraco_id": 25040
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/owning-a-childcare-business/",
        "umbraco_id": 25043
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/funding-and-finance/",
        "umbraco_id": 25047
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/childcare-business-support/marketing/",
        "umbraco_id": 25056
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/becoming-a-childminder/",
        "umbraco_id": 25140
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/07062018-cundy-cross-roadworks/",
        "umbraco_id": 25158
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/egress-secure-email/",
        "umbraco_id": 25159
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/gallery/",
        "umbraco_id": 25334
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/28062018-gleeson-planning-application/",
        "umbraco_id": 25377
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/town-hall/",
        "umbraco_id": 25390
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/28062018-flights-for-council-business/",
        "umbraco_id": 25403
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/apprenticeships/",
        "umbraco_id": 25639
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05072018-services-at-the-keresforth-centre/",
        "umbraco_id": 25648
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-travel/",
        "umbraco_id": 25658
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-travel/sustainable-school-travel/",
        "umbraco_id": 25659
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-travel/help-with-travel-to-school/",
        "umbraco_id": 25665
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-travel/school-travel-for-children-with-special-educational-disability-or-mobility-needs-send/",
        "umbraco_id": 25671
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-travel/zero-fare-pass-for-travel-to-school/",
        "umbraco_id": 25672
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/our-borough-profile/",
        "umbraco_id": 25742
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11072018-showing-of-wimbledon-finals-on-big-screen-cancelled/",
        "umbraco_id": 25747
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11072018-sheffield-city-region-devolution-deal/",
        "umbraco_id": 25748
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11072018-update-on-devolution/",
        "umbraco_id": 25749
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/empty-homes/empty-homes-review-2022/",
        "umbraco_id": 25783
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/",
        "umbraco_id": 25787
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/",
        "umbraco_id": 25788
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/key-projects/",
        "umbraco_id": 25800
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/town-centre/",
        "umbraco_id": 25805
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/town-centre/the-glass-works/",
        "umbraco_id": 25821
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/town-centre/town-centre-business-support/",
        "umbraco_id": 25823
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/town-centre/promotional-event-space/",
        "umbraco_id": 25824
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/neighbourhood-planning/oxspring-neighbourhood-development-plan/",
        "umbraco_id": 25839
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18072018-school-shortages/",
        "umbraco_id": 25878
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/frequently-asked-questions-about-jobs-with-us/",
        "umbraco_id": 25900
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/3172018-bella-vista-farm/",
        "umbraco_id": 25925
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/3172018-spook-graffiti-tag/",
        "umbraco_id": 25926
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/learning-for-the-future-assessment-centre/",
        "umbraco_id": 25975
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/employability/",
        "umbraco_id": 25978
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/08082018-ardsley-community-centre/",
        "umbraco_id": 25998
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06082018-fire-at-keresforth-recreation-ground/",
        "umbraco_id": 26006
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/level-3-award-in-emergency-first-aid-at-work/",
        "umbraco_id": 26019
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/a628-dodworth-road-highway-improvements-m1-j37-all-statements/",
        "umbraco_id": 26022
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/level-3-award-in-paediatric-first-aid/",
        "umbraco_id": 26037
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/statutory-courses-for-business/level-2-award-in-healthy-foods-and-special-diets/",
        "umbraco_id": 26039
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/deaths-and-funerals/pet-crematorium/",
        "umbraco_id": 26049
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13082018-section-106-pilley-pocket-park-jubilee-park-lidgett-lane/",
        "umbraco_id": 26050
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/03082018-holden-house/",
        "umbraco_id": 26062
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16082018-market-kitchen/",
        "umbraco_id": 26088
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16082018-cctv-in-taxis/",
        "umbraco_id": 26090
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/how-we-measure-our-performance/",
        "umbraco_id": 26094
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29082018-holidays-in-term-time/",
        "umbraco_id": 26206
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/03092018-barnsley-council-s-plans-look-to-make-the-most-of-brexit-and-managing-any-challenges/",
        "umbraco_id": 26232
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04092018-darton-park-car-park/",
        "umbraco_id": 26235
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/10092018-teachers-with-a-degree-in-shortage-subjects/",
        "umbraco_id": 26281
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11092018-boy-racers-at-cortonwood/",
        "umbraco_id": 26283
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-homeless-alliance/",
        "umbraco_id": 26326
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-homeless-alliance/ways-to-help/",
        "umbraco_id": 26335
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-homeless-alliance/things-we-get-asked/",
        "umbraco_id": 26337
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19092018-mapplewell-roadworks/",
        "umbraco_id": 26354
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19092018-adult-social-care-individual-support-needs/",
        "umbraco_id": 26355
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/neighbourhood-planning/penistone-neighbourhood-development-plan/",
        "umbraco_id": 26373
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27092018-grimethorpe-ladywood-school-industrial-action/",
        "umbraco_id": 26449
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-october-2018/",
        "umbraco_id": 26451
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/reported-fly-tipping/",
        "umbraco_id": 26459
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/02102018-blue-bins/",
        "umbraco_id": 26482
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27092018-scar-lane/",
        "umbraco_id": 26483
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05102018-school-exclusions/",
        "umbraco_id": 26534
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04102018-complaints-about-empty-properties-in-grimethorpe/",
        "umbraco_id": 26535
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11102018-market-kitchen/",
        "umbraco_id": 26579
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11102018-environmental-waste-conviction/",
        "umbraco_id": 26589
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15102018-market-parade-closure/",
        "umbraco_id": 26623
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19102018-handy-person-service/",
        "umbraco_id": 26666
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/prevent-and-channel/",
        "umbraco_id": 26698
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/civil-penalties-policy-consultation/",
        "umbraco_id": 26715
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/26102018-gleeson-homes/",
        "umbraco_id": 26726
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/send-us-evidence-for-your-council-tax-support-or-housing-benefit-claim/",
        "umbraco_id": 26728
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30102018-a628-safer-road-scheme-statement/",
        "umbraco_id": 26752
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/paying-council-tax-by-direct-debit/",
        "umbraco_id": 26754
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/setting-up-services-in-my-bentax/",
        "umbraco_id": 26759
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01112018-why-barnsley-has-not-charged-any-community-infrastructure-levy-cil/",
        "umbraco_id": 26777
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/tour-de-yorkshire-2020/images-from-tour-de-yorkshire-2018/",
        "umbraco_id": 26809
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/outdoor-market/",
        "umbraco_id": 26859
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15112018-tackling-dog-fouling-and-littering/",
        "umbraco_id": 26884
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16112018-remembrance-day/",
        "umbraco_id": 26889
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19112018-holden-house/",
        "umbraco_id": 26891
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/send-us-evidence-for-council-tax/",
        "umbraco_id": 26899
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22112018-fly-tipping/",
        "umbraco_id": 26962
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/foot-care/",
        "umbraco_id": 26972
    },
    {
        "url": "https://www.barnsley.gov.uk/services/animal-welfare-and-licences/loose-horses/",
        "umbraco_id": 26975
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29112018-rough-sleeping/",
        "umbraco_id": 27019
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/attending-our-public-meetings/",
        "umbraco_id": 27020
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05122018-local-plan-update/",
        "umbraco_id": 27035
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/telephone-call-recording/",
        "umbraco_id": 27048
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/",
        "umbraco_id": 27169
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/the-child-as-an-individual/",
        "umbraco_id": 27171
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/making-reasonable-adjustments/",
        "umbraco_id": 27174
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/role-of-the-senco/",
        "umbraco_id": 27175
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/training/",
        "umbraco_id": 27181
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/meeting-the-needs-of-a-child/",
        "umbraco_id": 27183
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/care-plans/",
        "umbraco_id": 27221
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/supporting-children-with-asthma/",
        "umbraco_id": 27224
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/transition-in-early-years/",
        "umbraco_id": 27228
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/risk-assessments/",
        "umbraco_id": 27229
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/03012019-bin-collection-calendars/",
        "umbraco_id": 27233
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/supporting-inclusion/including-me-toolkit/resource-bank/",
        "umbraco_id": 27245
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-news/safeguarding-awareness-week/",
        "umbraco_id": 27299
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/sending-evidence-using-a-smartphone-or-tablet/",
        "umbraco_id": 27361
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18012019-b-friend-project/",
        "umbraco_id": 27384
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/28012019-centre-for-cities-report/",
        "umbraco_id": 27415
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/getting-here/",
        "umbraco_id": 27416
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30012019-residential-and-nursing-care-placement-fees/",
        "umbraco_id": 27458
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/31012019-people-sleeping-rough-in-barnsley/",
        "umbraco_id": 27466
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/local-plan/",
        "umbraco_id": 27478
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-plan/2019-2020-budget/",
        "umbraco_id": 27486
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-tenants/",
        "umbraco_id": 27494
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-landlords/",
        "umbraco_id": 27497
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/home-owners/",
        "umbraco_id": 27503
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/energy-at-home/",
        "umbraco_id": 27511
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/housing-strategies/",
        "umbraco_id": 27513
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06022019-m1-junction-36-economic-growth-corridor-goldthorpe-phase-2/",
        "umbraco_id": 27526
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11022019-fly-tippers-caught-on-cctv-01022019/",
        "umbraco_id": 27557
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12022019-dog-fouling-fines-across-barnsley/",
        "umbraco_id": 27567
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12022019-substance-misuse-service/",
        "umbraco_id": 27586
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13022019-barnsley-crematorium-bronze-plaques-theft/",
        "umbraco_id": 27606
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15022019-a628-road-closure/",
        "umbraco_id": 27616
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/alright-pal-mental-health-and-suicide-prevention/",
        "umbraco_id": 27651
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22022019-wentworth-castle-gardens-agreement/",
        "umbraco_id": 27677
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19022019-flytipping-at-wombwell-woods/",
        "umbraco_id": 27689
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19022019-barnsley-business-figures/",
        "umbraco_id": 27690
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/eu-transition/",
        "umbraco_id": 27707
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06032019-gleeson-homes/",
        "umbraco_id": 27788
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/",
        "umbraco_id": 27816
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/golf/",
        "umbraco_id": 27826
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/football/",
        "umbraco_id": 27827
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/walking-in-barnsley/",
        "umbraco_id": 27828
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/active-in-barnsley/",
        "umbraco_id": 27829
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/sport-clubs/",
        "umbraco_id": 27830
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/members/",
        "umbraco_id": 27864
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/gallery/",
        "umbraco_id": 27915
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13032019-statement-on-behalf-of-lacewood-primary-school/",
        "umbraco_id": 27922
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14032019-roaming-horses/",
        "umbraco_id": 27936
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/sleep-support/",
        "umbraco_id": 27946
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15032019-statement-update-on-behalf-of-lacewood-primary-school/",
        "umbraco_id": 27952
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/video-help-guides/report-fly-tipping/",
        "umbraco_id": 28020
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-government-elections-thursday-2-may-2019/",
        "umbraco_id": 28035
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/26032019-unlicensed-an-all-night-music-event-in-barnsley/",
        "umbraco_id": 28066
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/eye-health/",
        "umbraco_id": 28072
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/conservation-areas/",
        "umbraco_id": 28079
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/national-graduate-development-programme/",
        "umbraco_id": 28108
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/national-graduate-development-programme/about-barnsley-council/",
        "umbraco_id": 28109
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/national-graduate-development-programme/about-the-role/",
        "umbraco_id": 28110
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/03042019-gbp52000-funding-for-eco-stars-air-quality-project/",
        "umbraco_id": 28165
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-april-2019/",
        "umbraco_id": 28168
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05042019-welcome-to-yorkshire/",
        "umbraco_id": 28215
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04042019-electric-vehicle-charging/",
        "umbraco_id": 28216
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/neighbourhood-planning/",
        "umbraco_id": 28227
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/09042019-response-to-taxpayers-alliance-statement-on-senior-officer-pay/",
        "umbraco_id": 28235
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11042019-response-to-unison-letter-regarding-schools-meals-provision/",
        "umbraco_id": 28256
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12042019-payments-for-celebrity-performances/",
        "umbraco_id": 28260
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/",
        "umbraco_id": 28261
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/about-us/",
        "umbraco_id": 28264
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/placing-authorities/",
        "umbraco_id": 28266
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/reasons-children-come-into-care/",
        "umbraco_id": 28271
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/",
        "umbraco_id": 28274
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/information-for-birth-parents/",
        "umbraco_id": 28277
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/information-for-foster-carers/",
        "umbraco_id": 28280
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/information-for-professionals/",
        "umbraco_id": 28282
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/people-who-can-support-you/",
        "umbraco_id": 28312
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/care-leavers/",
        "umbraco_id": 28323
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/well-look-after-you-in-a-safe-and-caring-home/",
        "umbraco_id": 28324
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/well-prepare-you-for-the-future/",
        "umbraco_id": 28327
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/well-support-you-to-be-healthy/",
        "umbraco_id": 28332
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/well-make-sure-you-get-a-good-education/",
        "umbraco_id": 28333
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/jargon-buster/",
        "umbraco_id": 28334
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/well-involve-you-in-making-it-happen/",
        "umbraco_id": 28336
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/well-promote-support-and-respect-your-identity/",
        "umbraco_id": 28338
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/children-in-care-information-just4u/care4us-council/",
        "umbraco_id": 28342
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/european-parliamentary-election-thursday-23-may-2019/",
        "umbraco_id": 28345
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15042019-supplementary-planning-documents-consultation/",
        "umbraco_id": 28346
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/a628-dodworth-roadbroadway-junction/",
        "umbraco_id": 28367
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/17042019-disruption-to-the-website/",
        "umbraco_id": 28371
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/strategic-risk-register/",
        "umbraco_id": 28398
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/health-and-wellbeing-in-barnsley/",
        "umbraco_id": 28538
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/barnsley-town-centre-public-space-protection-order-pspo/",
        "umbraco_id": 28553
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/how-we-work-together/feel-good-barnsley/",
        "umbraco_id": 28574
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/10052019-response-to-unison-press-release-regarding-school-meals-provision/",
        "umbraco_id": 28649
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/gallery-of-childrens-religious-education-work/",
        "umbraco_id": 28659
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/a-z-of-waste-and-recyclable-items/",
        "umbraco_id": 28706
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22052019-european-election-overseas-postal-votes/",
        "umbraco_id": 28810
    },
    {
        "url": "https://www.barnsley.gov.uk/services/sport-and-leisure/cycling/tour-de-yorkshire-2020/images-from-tour-de-yorkshire-2019/",
        "umbraco_id": 28813
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/28052019-school-meals-cabinet-report/",
        "umbraco_id": 28854
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29052019-grass-cutting-in-silkstone/",
        "umbraco_id": 28875
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29052019-new-income-management-system/",
        "umbraco_id": 28876
    },
    {
        "url": "https://www.barnsley.gov.uk/api/",
        "umbraco_id": 28935
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/young-people/information-advice-and-guidance/",
        "umbraco_id": 28965
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/mayor-of-barnsley/",
        "umbraco_id": 29022
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/240619-straight-lane-closure-update/",
        "umbraco_id": 29141
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/",
        "umbraco_id": 29302
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/library-fees-and-charges/",
        "umbraco_id": 29305
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/volunteer-at-a-library/",
        "umbraco_id": 29306
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/join-the-library/",
        "umbraco_id": 29307
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/activities-and-events/",
        "umbraco_id": 29308
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/contact-the-library/",
        "umbraco_id": 29309
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/your-digital-hub/",
        "umbraco_id": 29310
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/a-place-to-thrive/",
        "umbraco_id": 29312
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/",
        "umbraco_id": 29313
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/book-a-room-in-a-library/",
        "umbraco_id": 29314
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/heart-of-the-community/",
        "umbraco_id": 29315
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/enriching-lives/",
        "umbraco_id": 29316
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-priory-campus/",
        "umbraco_id": 29359
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/enriching-lives/borrowing-books-and-reading/",
        "umbraco_id": 29360
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-darfield/",
        "umbraco_id": 29361
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-goldthorpe/",
        "umbraco_id": 29364
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/activities-and-events/activities-for-adults/",
        "umbraco_id": 29362
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-mapplewell-and-staincross/",
        "umbraco_id": 29365
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/activities-and-events/activities-for-children/",
        "umbraco_id": 29366
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/heart-of-the-community/home-library-service/",
        "umbraco_id": 29367
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-hoyland/",
        "umbraco_id": 29368
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-wombwell/",
        "umbraco_id": 29369
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-worsbrough/",
        "umbraco_id": 29371
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-the-lightbox/",
        "umbraco_id": 29372
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-grimethorpe/",
        "umbraco_id": 29373
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-penistone/",
        "umbraco_id": 29375
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/activities-and-events/events-at-our-libraries/",
        "umbraco_id": 29377
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-cudworth/",
        "umbraco_id": 29380
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/enriching-lives/childrens-library/",
        "umbraco_id": 29381
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-dodworth/",
        "umbraco_id": 29382
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/your-digital-hub/ebooks-eaudio-and-digital-resources/",
        "umbraco_id": 29383
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-roundhouse/",
        "umbraco_id": 29385
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-royston/",
        "umbraco_id": 29386
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-thurnscoe/",
        "umbraco_id": 29387
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/oxspring-neighbourhood-plan/",
        "umbraco_id": 29591
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/02072019-changes-to-grass-cutting-schedule/",
        "umbraco_id": 29593
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/tell-us-about-your-experience-today/",
        "umbraco_id": 29595
    },
    {
        "url": "https://www.barnsley.gov.uk/services/information-and-privacy/personal-data-breaches/",
        "umbraco_id": 29602
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/02072019-smoking-related-hospital-admissions/",
        "umbraco_id": 29609
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04072019-planning-permission-dispute-at-cawthorne-club/",
        "umbraco_id": 29631
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/able-barnsley/",
        "umbraco_id": 29701
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/about-masterplan-frameworks/",
        "umbraco_id": 29712
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/traffic-regulation-orders/",
        "umbraco_id": 29726
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-and-housing-benefit-video-help-guides/council-tax-explained-and-how-to-get-help/",
        "umbraco_id": 29762
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/local-plan-archaeology-reviews/",
        "umbraco_id": 29771
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/local-plan-wessex-archaeological-scoping-study-areas/",
        "umbraco_id": 29773
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/for-professionals-and-volunteers/training-materials/",
        "umbraco_id": 29782
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19072019-vandalism-at-elsecar-park/",
        "umbraco_id": 29785
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/find-a-library/library-at-the-lightbox/the-lightbox-poem/",
        "umbraco_id": 29795
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/premises-licences/surrender-a-premises-licence/",
        "umbraco_id": 29867
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/31072019-brampton-canal/",
        "umbraco_id": 29913
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06082019-incident-at-fun-fair/",
        "umbraco_id": 29952
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/singlepoint/",
        "umbraco_id": 29965
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/recycling-resources-for-schools/",
        "umbraco_id": 29990
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/parish-and-town-councils/choose-a-parish-council/shafton-parish-council/",
        "umbraco_id": 29998
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/scams/",
        "umbraco_id": 30002
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04072019-bin-collections-on-black-lane-tankersley/",
        "umbraco_id": 30025
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16082019-diesel-spillage/",
        "umbraco_id": 30054
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14082019-the-homeless-reduction-act/",
        "umbraco_id": 30055
    },
    {
        "url": "https://www.barnsley.gov.uk/site-map/",
        "umbraco_id": 30113
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04092019-reduction-in-empty-properties/",
        "umbraco_id": 30206
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04092019-gleeson-homes/",
        "umbraco_id": 30211
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13092019-centre-for-cities-report/",
        "umbraco_id": 30296
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/helping-our-environment/reducing-carbon-emissions/",
        "umbraco_id": 30326
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18092019-local-digital-fund/",
        "umbraco_id": 30345
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-homeless-alliance/accessibility-statement-for-barnsley-homeless-alliance/",
        "umbraco_id": 30350
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/using-a-mobility-scooter-in-our-libraries/",
        "umbraco_id": 30359
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20092019-operation-encompass/",
        "umbraco_id": 30361
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/24092019-market-traders-protest/",
        "umbraco_id": 30396
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/oral-health/",
        "umbraco_id": 30462
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/food-and-healthy-weight/",
        "umbraco_id": 30466
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/apprenticeships/our-strategy-and-targets/",
        "umbraco_id": 30506
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04102019-public-bins-in-shafton/",
        "umbraco_id": 30541
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/",
        "umbraco_id": 30542
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/local-and-available-sources-for-young-adults/",
        "umbraco_id": 30546
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/",
        "umbraco_id": 30547
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/key-contacts/",
        "umbraco_id": 30548
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/the-care-leavers-hub/",
        "umbraco_id": 30560
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/your-right-to-be-involved/",
        "umbraco_id": 30567
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/health-and-wellbeing-for-care-leavers/",
        "umbraco_id": 30568
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/accommodation/",
        "umbraco_id": 30569
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/education-employment-and-training-support/",
        "umbraco_id": 30571
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/access-to-your-files/",
        "umbraco_id": 30572
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/a-personal-adviser/",
        "umbraco_id": 30573
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/relationships/",
        "umbraco_id": 30576
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/finances/",
        "umbraco_id": 30577
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/",
        "umbraco_id": 30583
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/barnsley-joint-strategic-needs-assessment/",
        "umbraco_id": 30584
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/resilience-and-emotional-wellbeing/",
        "umbraco_id": 30588
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/lifestyle-and-wider-determinants/",
        "umbraco_id": 30589
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/overarching-objectives/",
        "umbraco_id": 30590
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/jsna-summary/",
        "umbraco_id": 30592
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/jsna-demographics/",
        "umbraco_id": 30593
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/high-quality-coordinated-care/",
        "umbraco_id": 30595
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/improving-quality-of-life/",
        "umbraco_id": 30596
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/lifestyle-and-wider-determinants/health-protection/",
        "umbraco_id": 30615
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/lifestyle-and-wider-determinants/wider-determinants/",
        "umbraco_id": 30616
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/high-quality-coordinated-care/services-rated-as-high-quality/",
        "umbraco_id": 30622
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/high-quality-coordinated-care/unplanned-hospital-admissions/",
        "umbraco_id": 30635
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/lifestyle-and-wider-determinants/health-care/",
        "umbraco_id": 30643
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/improving-quality-of-life/health-related-quality-of-life/",
        "umbraco_id": 30644
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/high-quality-coordinated-care/end-of-life-care/",
        "umbraco_id": 30669
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/improving-quality-of-life/experience-of-work-and-education/",
        "umbraco_id": 30677
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/resilience-and-emotional-wellbeing/adults-health-and-wellbeing/",
        "umbraco_id": 30682
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/improving-quality-of-life/managing-own-health/",
        "umbraco_id": 30686
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/lifestyle-and-wider-determinants/health-improvement/",
        "umbraco_id": 30688
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/joint-strategic-needs-assessment-jsna/resilience-and-emotional-wellbeing/children-and-young-peoples-health-and-wellbeing/",
        "umbraco_id": 30697
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/masterplan-framework-sites/",
        "umbraco_id": 30750
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/",
        "umbraco_id": 30826
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-from-october-2019/",
        "umbraco_id": 30858
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/childrens-emotional-health-and-wellbeing/",
        "umbraco_id": 30864
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/best-start-healthy-pregnancy-and-early-years/",
        "umbraco_id": 30870
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/smoking/",
        "umbraco_id": 30885
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/making-smoking-invisible/",
        "umbraco_id": 30896
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/",
        "umbraco_id": 30905
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/barnsley-independent-visitors-scheme/",
        "umbraco_id": 30913
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/report-a-breach-of-planning-permission/",
        "umbraco_id": 30915
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/",
        "umbraco_id": 30930
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/community-and-relationships/",
        "umbraco_id": 30932
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/show-your-support/",
        "umbraco_id": 30933
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/armed-forces-covenant/",
        "umbraco_id": 30935
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/making-a-home-in-civilian-society/",
        "umbraco_id": 30936
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/health-and-wellbeing-services/",
        "umbraco_id": 30937
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/events-and-activities/",
        "umbraco_id": 30939
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/veterans-and-the-law/",
        "umbraco_id": 30940
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/help-with-finance-and-debt/",
        "umbraco_id": 30941
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/employment-education-and-skills/",
        "umbraco_id": 30942
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/education-employment-and-training-support/confidence-building-and-personal-development-opportunities/",
        "umbraco_id": 31005
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/education-employment-and-training-support/developing-employability-skills-through-volunteering/",
        "umbraco_id": 31006
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/education-employment-and-training-support/education-and-training-opportunities-at-16plus-and-19plus/",
        "umbraco_id": 31007
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/education-employment-and-training-support/going-to-university/",
        "umbraco_id": 31008
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/our-local-offer-for-care-leavers/our-offer/education-employment-and-training-support/work-experience-opportunities/",
        "umbraco_id": 31009
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/alcohol/",
        "umbraco_id": 31050
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/market-kitchen-gallery/",
        "umbraco_id": 31062
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29102019-parking-enforcement-outside-of-schools/",
        "umbraco_id": 31068
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/funding-for-environmental-projects/",
        "umbraco_id": 31079
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/apply-for-a-planning-conditions-check-report/",
        "umbraco_id": 31127
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04112019-electric-vehicle-charging-points/",
        "umbraco_id": 31134
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/barnsley-bulletin/",
        "umbraco_id": 31140
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/barnsley-bulletin/careers-advice/",
        "umbraco_id": 31151
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/barnsley-bulletin/applying-for-a-job/",
        "umbraco_id": 31154
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/barnsley-bulletin/case-studies/",
        "umbraco_id": 31157
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06112019-towns-funds/",
        "umbraco_id": 31178
    },
    {
        "url": "https://www.barnsley.gov.uk/alerts/disruptions-to-bin-collections/",
        "umbraco_id": 31198
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/uk-parliamentary-election-12-december-2019/",
        "umbraco_id": 31202
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/financial-support-available-to-residents-and-businesses-affected-by-flooding/",
        "umbraco_id": 31252
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/neighbourhood-planning/cawthorne-neighbourhood-development-plan/",
        "umbraco_id": 31253
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-performance/quarterly-financial-performance-reports/",
        "umbraco_id": 31265
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15112019-barnsley-council-response-to-flooding-in-the-borough/",
        "umbraco_id": 31280
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/",
        "umbraco_id": 31281
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/household-waste-and-your-duty-of-care/",
        "umbraco_id": 31324
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21112019-consultation-notices/",
        "umbraco_id": 31393
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/armed-forces-walkway-gallery/",
        "umbraco_id": 31418
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/armed-forces-walkway/",
        "umbraco_id": 31428
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/principal-towns/shop-front-improvement-scheme/",
        "umbraco_id": 31450
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05122019-eligible-electoral-figures/",
        "umbraco_id": 31513
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/personal-social-health-and-economic-education/",
        "umbraco_id": 31519
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/recycling-reducing-and-reusing-waste-over-christmas/",
        "umbraco_id": 31525
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/about-market-kitchen/",
        "umbraco_id": 31544
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/cucina/",
        "umbraco_id": 31549
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/dollys-desserts/",
        "umbraco_id": 31570
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/hoyland-north-masterplan-framework/",
        "umbraco_id": 31607
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/10122019-principal-town-funding-in-darton-park/",
        "umbraco_id": 31611
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/barnsley-west-masterplan-framework/",
        "umbraco_id": 31613
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/jar-bar/",
        "umbraco_id": 31620
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/khao-niew-thai-cafe/",
        "umbraco_id": 31621
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/rajah-foods/",
        "umbraco_id": 31622
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/quack-rotisserie-duck/",
        "umbraco_id": 31623
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/daddy-beanz/",
        "umbraco_id": 31624
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/the-breeze-bros/",
        "umbraco_id": 31625
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11122019-dearne-and-bridge-street-anti-social-behaviour/",
        "umbraco_id": 31655
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/barnsley-market/market-kitchen/whos-in-market-kitchen/our-traditional-cafes/",
        "umbraco_id": 31666
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12122019-homelessness-and-rough-sleeping/",
        "umbraco_id": 31675
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/",
        "umbraco_id": 31718
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/",
        "umbraco_id": 31719
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/protecting-your-health/",
        "umbraco_id": 31720
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/how-we-work-together/",
        "umbraco_id": 31721
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/our-reports/",
        "umbraco_id": 31722
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19122019-couple-who-have-presented-as-homeless/",
        "umbraco_id": 31782
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23122019-government-announcement-of-more-funding-to-help-tackle-homelessness-and-rough-sleeping/",
        "umbraco_id": 31807
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/10012020-addition-investment-extended-for-clean-up/",
        "umbraco_id": 31865
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/support-for-parents-and-carers/",
        "umbraco_id": 31881
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/my-role-as-a-parent-in-supporting-my-childs-education/",
        "umbraco_id": 31882
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/choosing-the-right-school/",
        "umbraco_id": 31883
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/the-role-of-the-school-in-supporting-my-child/",
        "umbraco_id": 31884
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15012020-announcement-on-devolution-follow-up-statement-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council/",
        "umbraco_id": 31904
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16012020-announcement-on-devolution-follow-up-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council/",
        "umbraco_id": 31915
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16012020-joining-forces-town-centre-operation/",
        "umbraco_id": 31923
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21012020-ofsted-attainment-exclusions-and-ratings-report/",
        "umbraco_id": 31951
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21012020-wage-growth-in-barnsley/",
        "umbraco_id": 31952
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21022020-joining-forces-town-centre-operation/",
        "umbraco_id": 31954
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/28012020-holocaust-memorial-statement/",
        "umbraco_id": 31997
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/28012020-drug-related-deaths/",
        "umbraco_id": 32007
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29012020-m1-junction-36-dearne-valley-economic-growth-corridor-highway-improvements-cathill-broomhill-and-wath-road-roundabouts/",
        "umbraco_id": 32008
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30012020-air-pollution/",
        "umbraco_id": 32021
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30012020-government-announces-funding-to-support-homelessness-prevention/",
        "umbraco_id": 32023
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/03022020-hermes-distribution-hub-news-story/",
        "umbraco_id": 32039
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06022020-flag-flying/",
        "umbraco_id": 32074
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/town-centre/barnsley-fc-match-day-information/",
        "umbraco_id": 32076
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/mockingbird-programme/",
        "umbraco_id": 32079
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-partner-resources/",
        "umbraco_id": 32118
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/gambling-licences/gambling-policy-statement/",
        "umbraco_id": 32145
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/religious-education/gallery-of-visits-to-local-places-of-worship/",
        "umbraco_id": 32221
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/tenter-lane-hunshelf/",
        "umbraco_id": 32283
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18022020-operation-voyager/",
        "umbraco_id": 32284
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-travel/safe-and-active-travel-initiatives-for-schools/",
        "umbraco_id": 32302
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/broadway-recreation-ground/",
        "umbraco_id": 32305
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20022020-send-high-needs-funding/",
        "umbraco_id": 32314
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20022020-speed-limits-in-barnsley/",
        "umbraco_id": 32315
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20022020-water-system-at-lang-avenue/",
        "umbraco_id": 32318
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/publication-of-5percent-electorate-figure-for-petitions/",
        "umbraco_id": 32335
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-plan/2020-2021-budget/",
        "umbraco_id": 32337
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/creative-wellbeing/",
        "umbraco_id": 32342
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/positive-thinking/",
        "umbraco_id": 32343
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/tackling-modern-slavery/",
        "umbraco_id": 32347
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/support-behaviour-for-learning/",
        "umbraco_id": 32375
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/education-health-care-plan-process/",
        "umbraco_id": 32376
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/wider-opportunities/",
        "umbraco_id": 32377
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-in-care-and-care-leavers/barnsley-virtual-school/information-for-parents-and-carers-of-previously-looked-after-children/where-can-i-find-support/",
        "umbraco_id": 32378
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/040320-update-on-covid-19-novel-coronavirus-from-julia-burrows-director-of-public-health-barnsley-council/",
        "umbraco_id": 32392
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04032020-employment-growth/",
        "umbraco_id": 32394
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05032020-pilley-recreation-ground-development/",
        "umbraco_id": 32397
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/05032020-rough-sleeping-initiative-funding-in-barnsley/",
        "umbraco_id": 32399
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/small-business-rates-relief-20202021/",
        "umbraco_id": 32482
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/coronavirus-covid-19/coronavirus-covid-19-advice-and-guidance/",
        "umbraco_id": 32490
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/property-flood-resilience-pfr-recovery-support-scheme/",
        "umbraco_id": 32530
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/coronavirus-covid-19/support-for-businesses-due-to-coronavirus-covid-19/",
        "umbraco_id": 32557
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/26032020-arrangements-for-council-governance-and-decision-making-in-response-to-covid-19/",
        "umbraco_id": 32610
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/armed-forces-covenant-gallery/",
        "umbraco_id": 32636
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30032020-asos-xpo-logistics-site/",
        "umbraco_id": 32645
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01042020-cllr-doug-birkinshaw/",
        "umbraco_id": 32666
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/sendiass-coronavirus-covid-19-advice-and-guidance/",
        "umbraco_id": 32707
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/080420-homelessness-and-rough-sleeping/",
        "umbraco_id": 32735
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/coronavirus-covid-19/request-coronavirus-covid-19-personal-protective-equipment-ppe/",
        "umbraco_id": 32743
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20042020-local-government-funding-during-covid-19/",
        "umbraco_id": 32764
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/statement-of-community-involvement-updates-to-how-the-council-consult-on-planning/",
        "umbraco_id": 32775
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/230420-commitment-to-support-communities-affected-by-flooding/",
        "umbraco_id": 32786
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/best-bar-none-bbn-documents/",
        "umbraco_id": 32791
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/care-homes-affected-by-covid-19/",
        "umbraco_id": 32792
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/report-on-economic-impact-of-covid-19-on-towns-in-the-uk-worsbrough/",
        "umbraco_id": 32809
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/300420-support-for-vulnerable-children-during-lockdown/",
        "umbraco_id": 32844
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/your-course-induction/",
        "umbraco_id": 32909
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/safer-barnsley-partnership/",
        "umbraco_id": 32921
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/hoyland-west-masterplan-framework/",
        "umbraco_id": 32923
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/penistone-neighbourhood-development-plan/",
        "umbraco_id": 32942
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/300420-havelock-street-in-darfield/",
        "umbraco_id": 32953
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/public-transport/zoom-under-16-travel-pass/",
        "umbraco_id": 32955
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/130520-arrangements-for-handover-to-new-mayor/",
        "umbraco_id": 32974
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/local-listed-buildings/",
        "umbraco_id": 32976
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13052020-statement-in-response-to-the-open-letter-from-gmb-to-bmbc/",
        "umbraco_id": 32978
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/houses-in-multiple-occupation-hmos/",
        "umbraco_id": 32983
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/how-to-use-the-internet-to-stay-in-touch-with-others/",
        "umbraco_id": 32984
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/safer-and-stronger-barnsley-partnership/",
        "umbraco_id": 32992
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18052020-statement-regarding-barnsley-schools-offer-from-1-june/",
        "umbraco_id": 33006
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21052020-statement-in-response-to-a-rise-in-benefit-claims-during-covid-19-pandemic/",
        "umbraco_id": 33028
    },
    {
        "url": "https://www.barnsley.gov.uk/services/events/organising-an-event/",
        "umbraco_id": 33048
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/270520-statement-regarding-national-government-support-in-coronavirus-crisis/",
        "umbraco_id": 33065
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/280520-position-on-schools-re-opening/",
        "umbraco_id": 33066
    },
    {
        "url": "https://www.barnsley.gov.uk/services/events/",
        "umbraco_id": 33072
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/280520-how-were-continuing-our-fostering-service-during-this-time/",
        "umbraco_id": 33073
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/290520-statement-regarding-virtual-cabinet-meetings/",
        "umbraco_id": 33088
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29052020-statement-on-schools-re-opening/",
        "umbraco_id": 33090
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/hoyland-south-masterplan-framework/",
        "umbraco_id": 33112
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/royston-masterplan-framework/",
        "umbraco_id": 33113
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/020620-vandalism-and-littering-in-our-parks/",
        "umbraco_id": 33119
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/020620-dog-fouling-on-camborne-way/",
        "umbraco_id": 33120
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/030620-enforcement-action-at-worsbrough-wood/",
        "umbraco_id": 33131
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/key-projects/m1-junction-36/",
        "umbraco_id": 33152
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/key-projects/m1-junction-37/",
        "umbraco_id": 33155
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/learning-and-development/transition-guidance-for-children-going-to-school-in-september/",
        "umbraco_id": 33156
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/stronger-communities-partnership/",
        "umbraco_id": 33208
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-feedback/celebrating-the-achievements-of-our-staff/",
        "umbraco_id": 33237
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-feedback/",
        "umbraco_id": 33246
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/goldthorpe-economic-growth-corridor-faqs/",
        "umbraco_id": 33340
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21062020-confirmed-cases-of-coronavirus-covid-19-at-joseph-locke-primary-school-update/",
        "umbraco_id": 33353
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23062020-cherry-tree-care-home-response/",
        "umbraco_id": 33367
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23062020-covid-19-cases-at-cranswick-foods-in-barnsley/",
        "umbraco_id": 33384
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-monitoring-officer/",
        "umbraco_id": 33393
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/250620-statement-regarding-barnsley-councils-financial-position/",
        "umbraco_id": 33411
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/25062020-covid-19-cases-at-royal-mail-sorting-office/",
        "umbraco_id": 33423
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/29062020-south-yorkshire-devolution-deal/",
        "umbraco_id": 33434
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/30062020-response-to-number-of-covid-19-cases-in-barnsley/",
        "umbraco_id": 33460
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/010720-petition-to-lower-the-speed-limit-in-staincross/",
        "umbraco_id": 33472
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01072020-numbers-of-coronavirus-covid-19-cases-in-barnsley/",
        "umbraco_id": 33482
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/private-fostering/",
        "umbraco_id": 33492
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06072020-reopening-of-joseph-locke-primary-school/",
        "umbraco_id": 33536
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/06072020-planning-application-received-for-sites-within-hoyland-west-masterplan-framework-area/",
        "umbraco_id": 33540
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/160720-send-provision-update/",
        "umbraco_id": 33652
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/17072020-covid-19-funding-for-local-authorities/",
        "umbraco_id": 33681
    },
    {
        "url": "https://www.barnsley.gov.uk/services/media-and-advertising/help-to-share-our-messages/",
        "umbraco_id": 33684
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/temporary-pavement-cafe-licence-due-to-covid-19-coronavirus/",
        "umbraco_id": 33808
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/24072020-cherry-tree-care-home-safeguarding/",
        "umbraco_id": 33809
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/private-landlords/landlord-guidance/",
        "umbraco_id": 33864
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/31072020-havelock-street-rats/",
        "umbraco_id": 33881
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/helping-our-environment/",
        "umbraco_id": 33889
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/helping-our-environment/how-can-i-reduce-my-carbon-emissions/",
        "umbraco_id": 33890
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/helping-our-environment/electric-vehicles/",
        "umbraco_id": 33891
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/",
        "umbraco_id": 33893
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/070820-stottercliffe-cemetery-vandalism/",
        "umbraco_id": 33948
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/070820-homelessness-and-rough-sleeping-in-tents/",
        "umbraco_id": 33952
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/young-people/substance-misuse-service-for-young-people/",
        "umbraco_id": 33954
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/",
        "umbraco_id": 34010
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/maths/getting-started-with-maths/",
        "umbraco_id": 34016
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/maths/vocational-maths/",
        "umbraco_id": 34020
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/english/english-progression/",
        "umbraco_id": 34034
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/just4you/",
        "umbraco_id": 34058
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/our-vision-and-values/",
        "umbraco_id": 34059
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/age-friendly-barnsley/",
        "umbraco_id": 34097
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/190820-barnsley-football-club-legal-disputes/",
        "umbraco_id": 34100
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20082020-lifting-of-the-eviction-ban/",
        "umbraco_id": 34117
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/introduction-to-health-and-social-care/",
        "umbraco_id": 34121
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/level-1-preparing-to-work-in-adult-social-care/",
        "umbraco_id": 34122
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/level-2-skills-for-health-and-social-care/",
        "umbraco_id": 34124
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/level-2-diploma-in-care/",
        "umbraco_id": 34125
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/level-3-diploma-in-health-and-social-care/",
        "umbraco_id": 34126
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/cache-level-2-diploma-for-the-early-years-practitioner/",
        "umbraco_id": 34127
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/level-2-award-in-skills-for-childcare/",
        "umbraco_id": 34128
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/safeguarding-children-annual-report/",
        "umbraco_id": 34186
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/annual-report-201920/",
        "umbraco_id": 34188
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/",
        "umbraco_id": 34215
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/280820-monk-bretton-cemetery-thefts/",
        "umbraco_id": 34221
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/for-professionals/multi-agency-training/training-and-events-calendar/",
        "umbraco_id": 34233
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/02092020-employees-remote-working/",
        "umbraco_id": 34250
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/040920-venue-not-following-social-distancing-rules/",
        "umbraco_id": 34277
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/07-09-2020-confirmed-case-of-coronavirus-covid-19-at-athersley-south-primary-school/",
        "umbraco_id": 34289
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/keeping-our-waste-crews-working-safely/",
        "umbraco_id": 34302
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/accessibility-statement/",
        "umbraco_id": 34309
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/accessible-documents-policy/",
        "umbraco_id": 34310
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/coronavirus-covid-19/",
        "umbraco_id": 34326
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/key-projects/towns-fund-deal-goldthorpe/",
        "umbraco_id": 34349
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15092020-statement-from-barnsley-council-regarding-barnsley-football-club-s-future-at-oakwell/",
        "umbraco_id": 34419
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/160920-fly-tipping-in-summer-lane-car-park/",
        "umbraco_id": 34425
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/healthy-living/falls-prevention/",
        "umbraco_id": 34447
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/170920-remembrance-day-2020/",
        "umbraco_id": 34477
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/adult-courses-in-barnsley/",
        "umbraco_id": 34483
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/right-to-buy-scheme/buying-your-council-house/",
        "umbraco_id": 34627
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/social-care-roles/",
        "umbraco_id": 34651
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/09-10-2020-bubble-closures-at-greenacre-school/",
        "umbraco_id": 34697
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/13-10-2020-update-to-bubble-closures-at-greenacre-school/",
        "umbraco_id": 34713
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/15-10-20-call-in-notice-received-for-next-stages-of-the-a628-dodworth-roadbroadway-junction-road-improvement-scheme/",
        "umbraco_id": 34730
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/update-your-taxi-licence-details/",
        "umbraco_id": 34744
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/it-and-digital-skills/microsoft-applications-entry-3-level-1-level-2/",
        "umbraco_id": 34749
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/it-and-digital-skills/introduction-to-digital-skills/",
        "umbraco_id": 34755
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/it-and-digital-skills/essential-digital-skills-for-work-and-life-level-1/",
        "umbraco_id": 34759
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/it-and-digital-skills/essential-digital-skills-for-work-and-life-entry-3/",
        "umbraco_id": 34761
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/fostering-in-barnsley-new/",
        "umbraco_id": 34763
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/fostering-in-barnsley-new/interested-in-fostering/",
        "umbraco_id": 34775
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/fostering-in-barnsley-new/information-for-foster-carers/",
        "umbraco_id": 34782
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/youth-offending/youth-justice-service/",
        "umbraco_id": 34786
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20-10-2020-coronavirus-cases-in-barnsley/",
        "umbraco_id": 34802
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-october-2020/",
        "umbraco_id": 34812
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22102020-closure-of-barnsley-town-hall/",
        "umbraco_id": 34827
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23-10-20-hoyland-west-masterplan-and-planned-hermes-site-in-barnsley/",
        "umbraco_id": 34833
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/041120-remembrance-day-updated-guidance/",
        "umbraco_id": 34882
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/energy-at-home/make-your-home-warmer-and-cheaper-to-run/",
        "umbraco_id": 34886
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/youth-offending/support-for-young-people/",
        "umbraco_id": 34916
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/youth-offending/support-for-parents-and-carers/",
        "umbraco_id": 34917
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/youth-offending/support-for-those-affected-by-a-crime/",
        "umbraco_id": 34918
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/fostering-in-barnsley/fostering-in-barnsley-new/fostering-news-and-case-studies/",
        "umbraco_id": 35002
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/131120-newsome-avenue-covid-19-update/",
        "umbraco_id": 35006
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/eldon-high-street-heritage-action-zone-hshaz/",
        "umbraco_id": 35036
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/",
        "umbraco_id": 35038
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/about-sendiass/",
        "umbraco_id": 35044
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/",
        "umbraco_id": 35068
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/our-groups/",
        "umbraco_id": 35069
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19112020-statement-regarding-barnsley-councils-financial-position/",
        "umbraco_id": 35073
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/about-sendiass/referrals/",
        "umbraco_id": 35132
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/about-sendiass/our-documents/",
        "umbraco_id": 35133
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19112020-giving-barnsley-the-chance-to-develop-and-prosper-the-benefits-of-long-term-planning-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council/",
        "umbraco_id": 35150
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/02-12-2020-schools-will-not-break-up-early-for-christmas/",
        "umbraco_id": 35194
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/land-at-mason-s-way-platts-common/",
        "umbraco_id": 35213
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/our-changing-landscapes/",
        "umbraco_id": 35238
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/03122020-lateral-flow-testing-in-care-homes/",
        "umbraco_id": 35244
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/",
        "umbraco_id": 35311
    },
    {
        "url": "https://www.barnsley.gov.uk/services/get-online-with-us/full-fibre-for-barnsleys-rural-communities/",
        "umbraco_id": 35334
    },
    {
        "url": "https://www.barnsley.gov.uk/services/get-online-with-us/full-fibre-for-doncasters-rural-communities/",
        "umbraco_id": 35335
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/tenders-and-contracts/",
        "umbraco_id": 35353
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/local-and-available-support-services/",
        "umbraco_id": 35379
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/understanding-whats-right-for-me/",
        "umbraco_id": 35395
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22122020-a-statement-about-lateral-flow-testing-in-schools-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council/",
        "umbraco_id": 35402
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/finding-the-right-job-for-me/",
        "umbraco_id": 35403
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/getting-the-right-job/",
        "umbraco_id": 35404
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/staying-in-my-job/",
        "umbraco_id": 35405
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/advance-barnsley/progressing-my-career/",
        "umbraco_id": 35406
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/",
        "umbraco_id": 35419
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/help-with-early-years/",
        "umbraco_id": 35420
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/help-with-schools/",
        "umbraco_id": 35421
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/help-with-fe-and-he/",
        "umbraco_id": 35422
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-education-health-and-care-plans-ehcps/",
        "umbraco_id": 35443
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/exclusions/",
        "umbraco_id": 35453
    },
    {
        "url": "https://www.barnsley.gov.uk/have-your-say/annual-customer-feedback-report/",
        "umbraco_id": 35455
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/refusal-and-attendance/",
        "umbraco_id": 35474
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/specialist-schools/",
        "umbraco_id": 35485
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/energy-at-home/free-insulation-and-energy-saving-measures/",
        "umbraco_id": 35489
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/12012021-updated-statement-on-a-proposed-new-council-managed-childrens-home/",
        "umbraco_id": 35522
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/140121-statement-regarding-ons-data-on-barnsley-covid-19-deaths/",
        "umbraco_id": 35547
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/research-data-and-statistics/census-data/census-2021/",
        "umbraco_id": 35555
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/help-with-early-years-schools-and-colleges/transport/",
        "umbraco_id": 35561
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/goldthorpe-masterplan-framework/",
        "umbraco_id": 35563
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/our-groups/barnsley-sendiass-strategic-management-group/",
        "umbraco_id": 35596
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/our-groups/barnsley-sendiass-young-persons-service-syps/",
        "umbraco_id": 35597
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/our-groups/barnsley-sendiass-volunteers-and-peer-mentors/",
        "umbraco_id": 35601
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/about-sendiass/case-studies/",
        "umbraco_id": 35602
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/about-sendiass/meet-the-team/",
        "umbraco_id": 35660
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/the-nhs/",
        "umbraco_id": 35663
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/children-with-special-educational-needs-and-disabilities-send/sendiass-advice-and-support/information-advice-and-support/short-breaks-social-care-and-la-support/",
        "umbraco_id": 35723
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/040221-giving-barnsley-the-chance-to-develop-and-prosper-the-benefits-of-long-term-planning-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council/",
        "umbraco_id": 35754
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/040221-energy-efficiency-improvements-in-berneslai-homes-properties/",
        "umbraco_id": 35757
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/barnsleys-covid-memorial-project/",
        "umbraco_id": 35760
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/coronavirus-covid-19/coronavirus-covid-19-vaccines-for-frontline-social-care-workers/",
        "umbraco_id": 35764
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/110221-coal-removal-at-hermes-construction-site-in-hoyland/",
        "umbraco_id": 35811
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/",
        "umbraco_id": 35818
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/early-years-practitioner-roles/",
        "umbraco_id": 35828
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/early-years-practitioner-roles/about-the-role/",
        "umbraco_id": 35829
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/safer-barnsley-partnership/safer-barnsley-partnership-2021/",
        "umbraco_id": 35843
    },
    {
        "url": "https://www.barnsley.gov.uk/services/south-yorkshire-governance/south-yorkshire-governance/",
        "umbraco_id": 35858
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/early-years-practitioner-roles/working-at-our-family-centres/",
        "umbraco_id": 35869
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/early-years-practitioner-roles/apply-for-the-role/",
        "umbraco_id": 35901
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/",
        "umbraco_id": 35918
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/barnsley-send-youth-forum/",
        "umbraco_id": 35924
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/what-activities-were-on-with/",
        "umbraco_id": 35925
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/our-campaigns/",
        "umbraco_id": 35926
    },
    {
        "url": "https://www.barnsley.gov.uk/services/south-yorkshire-governance/south-yorkshire-governance/south-yorkshire-fire-and-rescue-authority/",
        "umbraco_id": 35947
    },
    {
        "url": "https://www.barnsley.gov.uk/services/south-yorkshire-governance/south-yorkshire-governance/south-yorkshire-police-and-crime-panel/",
        "umbraco_id": 35952
    },
    {
        "url": "https://www.barnsley.gov.uk/services/south-yorkshire-governance/south-yorkshire-governance/doncaster-sheffield-airport-consultative-committee/",
        "umbraco_id": 35951
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-plan/2021-2022-budget/",
        "umbraco_id": 36000
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/youth-council/barnsleys-young-mayor/",
        "umbraco_id": 36009
    },
    {
        "url": "https://www.barnsley.gov.uk/services/condolences/hrh-the-duke-of-edinburgh/",
        "umbraco_id": 36027
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/030321-statement-regarding-the-miners-wheel-at-grimethorpe/",
        "umbraco_id": 36088
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/public-space-protection-order-pspo-dog-control/",
        "umbraco_id": 36124
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/brook-hill-lane-dunford-bridgewindle-edge-ecklands/",
        "umbraco_id": 36144
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/11032021-a-joint-statement-from-barnsley-council-and-south-yorkshire-police-regarding-household-waste-recycling-centres/",
        "umbraco_id": 36182
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/120321-statement-in-response-to-comments-about-rockingham-cricket-club/",
        "umbraco_id": 36186
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/order-taxi-licensing-items/",
        "umbraco_id": 36266
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/",
        "umbraco_id": 36276
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/national-graduate-development-programme/hear-from-last-years-graduate/",
        "umbraco_id": 36315
    },
    {
        "url": "https://www.barnsley.gov.uk/services/south-yorkshire-governance/",
        "umbraco_id": 36332
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/26032021-statement-regarding-tony-wilkinson-inquest/",
        "umbraco_id": 36335
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/260321-statement-regarding-the-former-co-op-in-hoyland/",
        "umbraco_id": 36338
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01042021-response-to-the-risk-of-asbestos-exposure-in-schools-in-the-barnsley-east-area/",
        "umbraco_id": 36398
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/self-neglect-and-hoarding/",
        "umbraco_id": 36419
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/statement-from-the-mayor-of-barnsley-on-the-death-of-his-royal-highness-prince-philip-duke-of-edinburgh/",
        "umbraco_id": 36491
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14042021-statement-on-the-covenant-covering-rockingham-sports-ground/",
        "umbraco_id": 36556
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/220421-statement-in-response-to-studies-showing-barnsley-posting-uk-s-strongest-growth-in-job-opportunities/",
        "umbraco_id": 36612
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/healthy-holidays-clubs/",
        "umbraco_id": 36623
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/healthy-recipe-ideas/",
        "umbraco_id": 36625
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/staying-active-and-things-to-do/",
        "umbraco_id": 36626
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-government-elections-2021/",
        "umbraco_id": 36634
    },
    {
        "url": "https://www.barnsley.gov.uk/services/condolences/",
        "umbraco_id": 36646
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/barnsley-educational-child-and-community-psychology-service/our-service-model/",
        "umbraco_id": 36652
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-plan/",
        "umbraco_id": 36654
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/town-centre/town-centre-experimental-traffic-restriction/",
        "umbraco_id": 36667
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/request-a-replacement-taxi-drivers-badge/",
        "umbraco_id": 36710
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/04052021-statement-regarding-barnsleys-postal-votes-and-ballot-papers/",
        "umbraco_id": 36711
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/childcare-nurseries-and-family-support/early-years-and-childcare-professionals/eyfs-reforms/",
        "umbraco_id": 36712
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/good-food-barnsley/",
        "umbraco_id": 36737
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/cat-hill-lane-hoylandswaine-public-hearing/",
        "umbraco_id": 36925
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/warner-road/",
        "umbraco_id": 36930
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/cawthorne-neighbourhood-plan-referendum/",
        "umbraco_id": 36944
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/healthy-barnsley/",
        "umbraco_id": 36965
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/learning-barnsley/",
        "umbraco_id": 36971
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/growing-barnsley/",
        "umbraco_id": 36972
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/sustainable-barnsley/",
        "umbraco_id": 36973
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/your-barnsley-stories/",
        "umbraco_id": 36975
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-strategy/",
        "umbraco_id": 36976
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-board/",
        "umbraco_id": 36982
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27052021-summer-lane-roadworks/",
        "umbraco_id": 37036
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-april-2021/",
        "umbraco_id": 37124
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/carlton-masterplan-framework/",
        "umbraco_id": 37183
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/10062021-statement-regarding-encampment-on-pogmoor-recreation-ground/",
        "umbraco_id": 37296
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/18062021-statement-regarding-daddy-beanz-coffee/",
        "umbraco_id": 37373
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/coronavirus-covid-19-funding-for-voluntary-and-community-organisations/",
        "umbraco_id": 37427
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/thurgoland-footpath-no-18/",
        "umbraco_id": 37453
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-public-artwork-to-be-installed-in-penistone/",
        "umbraco_id": 37459
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-cooper-gallery-shortlisted-for-national-award/",
        "umbraco_id": 37461
    },
    {
        "url": "https://www.barnsley.gov.uk/news/funding-secured-to-create-elmer-the-elephant-trail-across-barnsley/",
        "umbraco_id": 37463
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-care-sector-thanked-for-tireless-work-throughout-the-pandemic/",
        "umbraco_id": 37466
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-libraries-get-an-exciting-new-look/",
        "umbraco_id": 37468
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a628-dodworth-road-improvement-scheme-work-taking-place-during-school-holidays/",
        "umbraco_id": 37472
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-museums-highly-commended-in-national-award/",
        "umbraco_id": 37478
    },
    {
        "url": "https://www.barnsley.gov.uk/news/school-celebrates-platinum-travel-award-with-road-closure-event/",
        "umbraco_id": 37486
    },
    {
        "url": "https://www.barnsley.gov.uk/news/nominations-wanted-from-barnsley-for-the-queen-s-birthday-honours-list-2022/",
        "umbraco_id": 37489
    },
    {
        "url": "https://www.barnsley.gov.uk/news/children-s-joint-commissioning-strategy-2021-23-to-be-presented-to-cabinet/",
        "umbraco_id": 37493
    },
    {
        "url": "https://www.barnsley.gov.uk/news/our-placement-and-sufficiency-strategy-for-children-in-care-and-care-leavers-has-its-annual-refresh/",
        "umbraco_id": 37494
    },
    {
        "url": "https://www.barnsley.gov.uk/news/response-from-julia-burrows-barnsley-director-of-public-health-to-covid-19-response-summer-2021-government-announcement/",
        "umbraco_id": 37496
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/how-we-deal-with-fraud/",
        "umbraco_id": 37497
    },
    {
        "url": "https://www.barnsley.gov.uk/news/mayor-s-day-is-back-outdoors-for-2021/",
        "umbraco_id": 37502
    },
    {
        "url": "https://www.barnsley.gov.uk/news/elmer-and-friends-march-into-the-cooper-gallery-for-trium-phant-exhibition/",
        "umbraco_id": 37505
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/07072021-summer-lane-roadworks-completed/",
        "umbraco_id": 37523
    },
    {
        "url": "https://www.barnsley.gov.uk/news/calling-all-parents-and-carers-with-childcare-needs-we-need-your-help/",
        "umbraco_id": 37525
    },
    {
        "url": "https://www.barnsley.gov.uk/news/public-consultation-planned-for-new-town-centre-design-strategy/",
        "umbraco_id": 37527
    },
    {
        "url": "https://www.barnsley.gov.uk/news/update-on-transforming-cities-fund-and-active-travel-fund-schemes/",
        "umbraco_id": 37529
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-dog-breeder-fined-for-a-second-time/",
        "umbraco_id": 37530
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-in-bloom-competition-winners-announced/",
        "umbraco_id": 37536
    },
    {
        "url": "https://www.barnsley.gov.uk/news/composting-competition-winners-announced/",
        "umbraco_id": 37540
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/barnsley-town-hall-application-for-approval-of-premises-for-civil-marriages-and-civil-partnerships/",
        "umbraco_id": 37544
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/barugh-green-crossroads/",
        "umbraco_id": 37548
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/furlong-road-goldthorpe/",
        "umbraco_id": 37552
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/high-street-silkstone/",
        "umbraco_id": 37561
    },
    {
        "url": "https://www.barnsley.gov.uk/news/there-s-no-place-for-hate-in-barnsley/",
        "umbraco_id": 37567
    },
    {
        "url": "https://www.barnsley.gov.uk/news/draft-royston-masterplan-proposal-approved-by-cabinet/",
        "umbraco_id": 37572
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/age-friendly-barnsley/our-partnership/",
        "umbraco_id": 37574
    },
    {
        "url": "https://www.barnsley.gov.uk/promotions/no-place-for-hate/",
        "umbraco_id": 37575
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/houses-in-multiple-occupation/",
        "umbraco_id": 37582
    },
    {
        "url": "https://www.barnsley.gov.uk/promotions/no-place-for-hate-social-media-assets/",
        "umbraco_id": 37597
    },
    {
        "url": "https://www.barnsley.gov.uk/news/energising-barnsley-with-solar-solutions/",
        "umbraco_id": 37618
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-16-july-2021/",
        "umbraco_id": 37619
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/syndale-road-cudworth/",
        "umbraco_id": 37656
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/manor-road-cudworth/",
        "umbraco_id": 37661
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/age-friendly-barnsley/age-friendly-awards/",
        "umbraco_id": 37668
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/age-friendly-barnsley/age-friendly-support-and-events/",
        "umbraco_id": 37673
    },
    {
        "url": "https://www.barnsley.gov.uk/news/green-bin-collections-suspended/",
        "umbraco_id": 37688
    },
    {
        "url": "https://www.barnsley.gov.uk/news/covid-19-funding-available-for-voluntary-and-community-organisations/",
        "umbraco_id": 37704
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/21072021-lessons-for-pupils-during-summer/",
        "umbraco_id": 37715
    },
    {
        "url": "https://www.barnsley.gov.uk/news/healthy-holidays-is-back-with-summer-holiday-clubs-across-barnsley/",
        "umbraco_id": 37727
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/urbed-town-centre-strategy/",
        "umbraco_id": 37745
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/26072021-statement-on-the-approval-of-masterplans-for-barnsley/",
        "umbraco_id": 37748
    },
    {
        "url": "https://www.barnsley.gov.uk/news/bereavement-counselling-service-launches-in-barnsley-schools/",
        "umbraco_id": 37754
    },
    {
        "url": "https://www.barnsley.gov.uk/news/hospital-and-council-pioneer-smoke-free-road-initiative/",
        "umbraco_id": 37758
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-has-successfully-managed-to-beat-the-street/",
        "umbraco_id": 37759
    },
    {
        "url": "https://www.barnsley.gov.uk/news/world-breastfeeding-week-comes-to-barnsley/",
        "umbraco_id": 37761
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/cawthorne-neighbourhood-development-plan/",
        "umbraco_id": 37762
    },
    {
        "url": "https://www.barnsley.gov.uk/news/water-basins-are-first-step-in-creating-new-habitats-and-green-spaces-on-hoyland-site/",
        "umbraco_id": 37770
    },
    {
        "url": "https://www.barnsley.gov.uk/news/royston-masterplan-framework-approved-by-full-council/",
        "umbraco_id": 37780
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-cooper-gallery-collection-featured-on-fake-or-fortune/",
        "umbraco_id": 37783
    },
    {
        "url": "https://www.barnsley.gov.uk/news/yorkshire-organisations-come-together-to-highlight-the-importance-of-being-water-wise/",
        "umbraco_id": 37794
    },
    {
        "url": "https://www.barnsley.gov.uk/news/broadband-upgrade-for-yorkshire-to-level-up-195000-rural-homes-and-businesses/",
        "umbraco_id": 37804
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-shortlisted-for-three-lgc-awards/",
        "umbraco_id": 37807
    },
    {
        "url": "https://www.barnsley.gov.uk/news/youth-music-project-comes-to-an-end-with-a-closing-event-at-library-at-the-lightbox/",
        "umbraco_id": 37815
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/dearne-hall-lane-barugh-green/",
        "umbraco_id": 37830
    },
    {
        "url": "https://www.barnsley.gov.uk/news/big-community-clean-up-sees-volunteers-clearing-350-bags-of-rubbish/",
        "umbraco_id": 37838
    },
    {
        "url": "https://www.barnsley.gov.uk/news/elsecar-archaeological-project-wins-national-award/",
        "umbraco_id": 37840
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/barnsley-gift-card/",
        "umbraco_id": 37845
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/annual-report-202021/",
        "umbraco_id": 37850
    },
    {
        "url": "https://www.barnsley.gov.uk/news/consultation-now-open-on-a-new-design-and-sustainability-strategy-for-barnsley-town-centre/",
        "umbraco_id": 37852
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-launches-moving-mental-health-forward/",
        "umbraco_id": 37854
    },
    {
        "url": "https://www.barnsley.gov.uk/news/proposed-plans-for-hoyland-common-landscaping-and-replanting/",
        "umbraco_id": 37861
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/reablement-support-worker-roles/",
        "umbraco_id": 37864
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/reablement-support-worker-roles/about-barnsley/",
        "umbraco_id": 37865
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/reablement-support-worker-roles/about-the-council/",
        "umbraco_id": 37866
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/reablement-support-worker-roles/support-worker-role/",
        "umbraco_id": 37867
    },
    {
        "url": "https://www.barnsley.gov.uk/news/lovetolearn-with-adult-skills-and-community-learning/",
        "umbraco_id": 37874
    },
    {
        "url": "https://www.barnsley.gov.uk/news/green-bin-collections-to-resume/",
        "umbraco_id": 37878
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/youth-offending/youth-justice-service/youth-justice-plan/",
        "umbraco_id": 37881
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-6-august-2021/",
        "umbraco_id": 37883
    },
    {
        "url": "https://www.barnsley.gov.uk/news/press-release-from-the-south-yorkshire-violence-reduction-unit-violence-reduction-fund-grant-recipients-announced/",
        "umbraco_id": 37887
    },
    {
        "url": "https://www.barnsley.gov.uk/news/successful-prosecutions-to-tackle-anti-social-behaviour-in-barnsley-town-centre/",
        "umbraco_id": 37889
    },
    {
        "url": "https://www.barnsley.gov.uk/news/nominations-are-still-open-to-get-barnsley-s-best-on-the-queen-s-birthday-honours-list/",
        "umbraco_id": 37891
    },
    {
        "url": "https://www.barnsley.gov.uk/news/is-your-new-school-starter-ready-for-big-school/",
        "umbraco_id": 37893
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-students-urged-to-join-the-re-use-revolution/",
        "umbraco_id": 37899
    },
    {
        "url": "https://www.barnsley.gov.uk/news/jumble-lane-crossing-closed-for-2021-22-season/",
        "umbraco_id": 37902
    },
    {
        "url": "https://www.barnsley.gov.uk/news/congratulations-to-barnsley-s-a-level-students/",
        "umbraco_id": 37917
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/adult-social-care-market-position-statement/",
        "umbraco_id": 37918
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/tin-mill-lane/",
        "umbraco_id": 37924
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/social-worker-jobs/",
        "umbraco_id": 37926
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/social-worker-jobs/about-our-children-services/",
        "umbraco_id": 37927
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/social-worker-jobs/about-working-for-us/",
        "umbraco_id": 37933
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/social-worker-jobs/about-the-roles/",
        "umbraco_id": 37934
    },
    {
        "url": "https://www.barnsley.gov.uk/news/first-projects-from-gbp231m-towns-fund-investment-complete/",
        "umbraco_id": 37943
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-glass-works-square-and-new-shops-to-open-next-month/",
        "umbraco_id": 37949
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-pupils-celebrate-this-years-gcse-results-day/",
        "umbraco_id": 37950
    },
    {
        "url": "https://www.barnsley.gov.uk/news/poet-laureate-takes-up-new-residency-in-barnsley/",
        "umbraco_id": 37953
    },
    {
        "url": "https://www.barnsley.gov.uk/news/pringles-tubes-and-other-paper-containers-with-metal-ends-now-accepted-at-barnsley-household-waste-recycling-centres/",
        "umbraco_id": 37955
    },
    {
        "url": "https://www.barnsley.gov.uk/news/there-s-still-plenty-of-time-to-book-onto-our-summer-holiday-clubs/",
        "umbraco_id": 37958
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16082021-statement-from-sarah-norman-chief-executive-of-barnsley-council/",
        "umbraco_id": 37962
    },
    {
        "url": "https://www.barnsley.gov.uk/news/self-care-project-hands-out-free-first-aid-kits-and-mental-health-guides/",
        "umbraco_id": 37985
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/blythe-street-wombwell/",
        "umbraco_id": 37993
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/helping-our-environment/sustainability-and-climate-change-mailing-list/",
        "umbraco_id": 37998
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/180821-statement-on-afghanistan-refugee-resettlement-scheme/",
        "umbraco_id": 38005
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-youth-zone-to-be-first-of-its-kind-in-yorkshire/",
        "umbraco_id": 38007
    },
    {
        "url": "https://www.barnsley.gov.uk/news/gbp38m-project-is-restoring-glory-of-barnsley-s-historic-attraction/",
        "umbraco_id": 38010
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/advancing-digital/",
        "umbraco_id": 38013
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-sculpture-installed-at-cannon-hall/",
        "umbraco_id": 38025
    },
    {
        "url": "https://www.barnsley.gov.uk/news/trio-of-new-museum-spaces-set-for-barnsley-s-multi-million-pound-centre/",
        "umbraco_id": 38036
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/wakefield-road-staincross/",
        "umbraco_id": 38041
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/pilley-green-pilley/",
        "umbraco_id": 38050
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/hill-street-elsecar/",
        "umbraco_id": 38057
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-mel-john-ross-executive-director-children-s-services-27-august/",
        "umbraco_id": 38062
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-27-august-2021/",
        "umbraco_id": 38063
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-traffic-management-plans-for-a628-dodworth-road-improvement-scheme/",
        "umbraco_id": 38069
    },
    {
        "url": "https://www.barnsley.gov.uk/news/customer-feedback-performance-during-pandemic-detailed-in-annual-report/",
        "umbraco_id": 38076
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/01092021-statement-on-afghanistan-refugee-resettlement-scheme/",
        "umbraco_id": 38078
    },
    {
        "url": "https://www.barnsley.gov.uk/news/applications-now-open-for-primary-and-secondary-school-places-for-september-2022/",
        "umbraco_id": 38081
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-members-of-the-barnsley-outbreak-control-board/",
        "umbraco_id": 38085
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-town-square-unveiled-as-the-glass-works-prepares-to-open/",
        "umbraco_id": 38089
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/armed-forces/welcoming-afghanistan-refugees-to-barnsley/",
        "umbraco_id": 38091
    },
    {
        "url": "https://www.barnsley.gov.uk/news/share-your-views-on-crime-and-anti-social-behaviour-in-barnsley/",
        "umbraco_id": 38097
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/the-glassworks-barnsley/",
        "umbraco_id": 38098
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-approve-digital-campus-plans-thanks-to-future-high-street-funding/",
        "umbraco_id": 38113
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/electric-vehicle-charging-faqs/",
        "umbraco_id": 38121
    },
    {
        "url": "https://www.barnsley.gov.uk/news/free-town-centre-parking-extended/",
        "umbraco_id": 38124
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-10-september-2021/",
        "umbraco_id": 38128
    },
    {
        "url": "https://www.barnsley.gov.uk/news/ask-someone-if-theyre-alrightpal-this-world-suicide-prevention-day/",
        "umbraco_id": 38131
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-tiny-tots-scheme-helps-young-first-time-parents-with-practical-support-and-advice/",
        "umbraco_id": 38137
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-members-to-receive-the-latest-care4us-council-annual-report/",
        "umbraco_id": 38147
    },
    {
        "url": "https://www.barnsley.gov.uk/news/latest-performance-report-reveals-positive-start-towards-our-ambitions-for-barnsley-the-place-of-possibilities/",
        "umbraco_id": 38150
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/local-planning-and-development/our-local-plan/masterplan-frameworks/barnsley-west-masterplan-framework/planning-applications-for-barnsley-west-mu1/",
        "umbraco_id": 38169
    },
    {
        "url": "https://www.barnsley.gov.uk/news/improvements-to-grass-cutting-schedules-to-boost-biodiversity/",
        "umbraco_id": 38171
    },
    {
        "url": "https://www.barnsley.gov.uk/news/arts-council-england-announces-commitment-to-barnsley-as-one-of-54-priority-places-nationally/",
        "umbraco_id": 38181
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-market-cookbook-to-celebrate-the-best-of-barnsley-s-burgeoning-food-scene/",
        "umbraco_id": 38184
    },
    {
        "url": "https://www.barnsley.gov.uk/services/housing/housing-strategies/private-sector-housing-plan-2030/",
        "umbraco_id": 38186
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/safeguarding-children-annual-report-2019-20/",
        "umbraco_id": 38204
    },
    {
        "url": "https://www.barnsley.gov.uk/news/recycle-week-stepping-up-to-the-climate-change-challenge/",
        "umbraco_id": 38208
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/helping-our-environment/positive-climate-partnership/",
        "umbraco_id": 38217
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-age-friendly-barnsley-with-a-week-of-activities-and-events/",
        "umbraco_id": 38228
    },
    {
        "url": "https://www.barnsley.gov.uk/news/annual-reports-of-the-barnsley-safeguarding-adults-board-and-safeguarding-children-partnership-202021/",
        "umbraco_id": 38254
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cudworth-covid-19-local-testing-site-to-close-for-one-day/",
        "umbraco_id": 38256
    },
    {
        "url": "https://www.barnsley.gov.uk/news/school-streets-project-continues-its-mission-to-create-healthier-and-safer-environments-outside-our-schools/",
        "umbraco_id": 38258
    },
    {
        "url": "https://www.barnsley.gov.uk/news/draft-goldthorpe-masterplan-framework-approved-by-cabinet/",
        "umbraco_id": 38260
    },
    {
        "url": "https://www.barnsley.gov.uk/news/there-s-something-for-everyone-at-our-sustainable-barnsley-events/",
        "umbraco_id": 38283
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/children-s-independent-sexual-violence-advocate-cisva/",
        "umbraco_id": 38286
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrations-planned-in-hoyland-for-first-smoke-free-high-street/",
        "umbraco_id": 38338
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-24-september-2021/",
        "umbraco_id": 38340
    },
    {
        "url": "https://www.barnsley.gov.uk/news/fallproofbarnsley-back-to-mark-regional-falls-awareness-week/",
        "umbraco_id": 38347
    },
    {
        "url": "https://www.barnsley.gov.uk/news/organisations-come-together-for-inaugural-icon-week-to-raise-awareness-of-infant-crying-and-how-to-cope/",
        "umbraco_id": 38349
    },
    {
        "url": "https://www.barnsley.gov.uk/news/property-flood-resilience-repair-scheme-to-close-next-month/",
        "umbraco_id": 38352
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-cllr-sir-steve-houghton-cbe-chair-of-barnsley-outbreak-control-board-and-julia-burrows-barnsley-director-of-public-health-1/",
        "umbraco_id": 38362
    },
    {
        "url": "https://www.barnsley.gov.uk/news/investment-plans-for-local-high-streets-across-barnsley/",
        "umbraco_id": 38366
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-members-to-discuss-high-needs-block-funding/",
        "umbraco_id": 38367
    },
    {
        "url": "https://www.barnsley.gov.uk/news/private-sector-landlord-scheme-relaunch-plan-to-be-discussed/",
        "umbraco_id": 38373
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-is-proud-to-be-celebrating-black-history-month/",
        "umbraco_id": 38375
    },
    {
        "url": "https://www.barnsley.gov.uk/news/integrated-care-system-barnsley-place-based-agreement/",
        "umbraco_id": 38382
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-barnsley-s-fantastic-rising-stars/",
        "umbraco_id": 38388
    },
    {
        "url": "https://www.barnsley.gov.uk/news/day-in-the-life-of-a-migrant-worker-explores-migrant-experiences-and-health-in-barnsley/",
        "umbraco_id": 38390
    },
    {
        "url": "https://www.barnsley.gov.uk/news/learn-how-we-can-help-you-heat-your-home-affordably-as-part-of-warm-homes-week/",
        "umbraco_id": 38392
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/digital-barnsley-strategy/",
        "umbraco_id": 38402
    },
    {
        "url": "https://www.barnsley.gov.uk/news/local-support-for-the-end-of-furlough/",
        "umbraco_id": 38417
    },
    {
        "url": "https://www.barnsley.gov.uk/services/lieutenancy-of-south-yorkshire/platinum-jubilee/",
        "umbraco_id": 38418
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-to-host-exhibition-by-world-famous-artists/",
        "umbraco_id": 38423
    },
    {
        "url": "https://www.barnsley.gov.uk/news/what-will-you-start-this-stoptober-support-is-available-locally-for-quitting-smoking/",
        "umbraco_id": 38428
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/customer-experience-strategy/",
        "umbraco_id": 38431
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/barnsley-cold-weather-plan-202122/",
        "umbraco_id": 38446
    },
    {
        "url": "https://www.barnsley.gov.uk/news/gambling-survey-to-help-develop-new-strategy/",
        "umbraco_id": 38457
    },
    {
        "url": "https://www.barnsley.gov.uk/news/julie-s-brass-band-england-award-is-music-to-our-ears/",
        "umbraco_id": 38459
    },
    {
        "url": "https://www.barnsley.gov.uk/news/have-your-say-on-proposed-changes-to-council-tax-support/",
        "umbraco_id": 38478
    },
    {
        "url": "https://www.barnsley.gov.uk/news/flu-vaccination-programme-gets-underway-in-barnsley/",
        "umbraco_id": 38480
    },
    {
        "url": "https://www.barnsley.gov.uk/news/woman-prosecuted-for-misuse-of-blue-badge/",
        "umbraco_id": 38484
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-museums-shortlisted-for-national-award/",
        "umbraco_id": 38490
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/become-a-healthy-holidays-club-provider/",
        "umbraco_id": 38491
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/08102021-oakwell-community-assets-limited-ocal-response-to-the-closure-of-the-west-stand-at-oakwell/",
        "umbraco_id": 38493
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-october-2021/",
        "umbraco_id": 38494
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/community-boost-central/",
        "umbraco_id": 38524
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-libraries-book-drops-the-entire-borough-to-celebrate-libraries-week-2021/",
        "umbraco_id": 38546
    },
    {
        "url": "https://www.barnsley.gov.uk/news/high-street-cleaning-and-maintenance-improvements-to-be-discussed/",
        "umbraco_id": 38559
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-traffic-orders-to-improve-road-safety-to-be-considered-by-cabinet/",
        "umbraco_id": 38561
    },
    {
        "url": "https://www.barnsley.gov.uk/news/investment-in-electric-vehicle-charging/",
        "umbraco_id": 38563
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/carers-strategy/",
        "umbraco_id": 38572
    },
    {
        "url": "https://www.barnsley.gov.uk/news/health-and-wellbeing-strategy-2021-30-aims-for-a-healthy-barnsley-for-all/",
        "umbraco_id": 38576
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/your-barnsley-stories/learning-barnsley-stories/",
        "umbraco_id": 38577
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/your-barnsley-stories/healthy-barnsley-stories/",
        "umbraco_id": 38578
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/your-barnsley-stories/growing-barnsley-stories/",
        "umbraco_id": 38579
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/your-barnsley-stories/sustainable-barnsley-stories/",
        "umbraco_id": 38580
    },
    {
        "url": "https://www.barnsley.gov.uk/news/organisations-come-together-to-proudly-celebrate-black-history-week/",
        "umbraco_id": 38584
    },
    {
        "url": "https://www.barnsley.gov.uk/news/we-are-celebrating-the-introduction-of-a-third-mockingbird-fostering-constellation/",
        "umbraco_id": 38592
    },
    {
        "url": "https://www.barnsley.gov.uk/news/worsbrough-mill-country-park-flies-the-flag-as-one-of-the-country-s-best-parks/",
        "umbraco_id": 38598
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/proud-to-care-working-in-care-in-barnsley/",
        "umbraco_id": 38599
    },
    {
        "url": "https://www.barnsley.gov.uk/news/elsecar-park-and-local-nature-reserve-celebrates-another-green-flag-award/",
        "umbraco_id": 38605
    },
    {
        "url": "https://www.barnsley.gov.uk/news/demolition-of-former-pub-to-make-way-for-exciting-future-use/",
        "umbraco_id": 38607
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/proud-to-care-working-in-care-in-barnsley/why-work-in-care/",
        "umbraco_id": 38608
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/proud-to-care-working-in-care-in-barnsley/find-a-role-in-care/",
        "umbraco_id": 38609
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/proud-to-care-working-in-care-in-barnsley/types-of-care-roles/",
        "umbraco_id": 38610
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a-message-from-julia-burrows-barnsley-director-of-public-health-on-behalf-of-the-integrated-care-partnership-friday-15-october/",
        "umbraco_id": 38612
    },
    {
        "url": "https://www.barnsley.gov.uk/news/this-national-adoption-week-one-adoption-south-yorkshire-champions-the-voices-less-heard/",
        "umbraco_id": 38625
    },
    {
        "url": "https://www.barnsley.gov.uk/news/charity-fraud-awareness-week/",
        "umbraco_id": 38627
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-the-musical-talents-of-barnsleys-children-and-young-people/",
        "umbraco_id": 38630
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-launch-staff-support-sessions-on-world-menopause-awareness-day/",
        "umbraco_id": 38636
    },
    {
        "url": "https://www.barnsley.gov.uk/news/flower-seller-faces-fines-and-costs-totalling-gbp2455-for-operating-illegally/",
        "umbraco_id": 38637
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-high-street-garden-in-cudworth-officially-open/",
        "umbraco_id": 38642
    },
    {
        "url": "https://www.barnsley.gov.uk/news/healthy-holidays-clubs-are-back-again-this-half-term/",
        "umbraco_id": 38648
    },
    {
        "url": "https://www.barnsley.gov.uk/news/experience-barnsley-s-latest-exhibition-celebrates-the-borough-and-its-stories/",
        "umbraco_id": 38666
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/employment-and-skills/",
        "umbraco_id": 38670
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-and-mel-john-ross-executive-director-children-s-services-22-october-2021/",
        "umbraco_id": 38677
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/25102021-road-safety-measures-recommended-at-hazlehead-crossroads/",
        "umbraco_id": 38684
    },
    {
        "url": "https://www.barnsley.gov.uk/news/national-focus-on-adoption-welcomed-by-one-adoption-south-yorkshire/",
        "umbraco_id": 38693
    },
    {
        "url": "https://www.barnsley.gov.uk/news/best-bar-none-is-back-for-2021/",
        "umbraco_id": 38695
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/proud-to-care-working-in-care-in-barnsley/about-barnsley/",
        "umbraco_id": 38696
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-s-planning-officers-issue-the-most-enforcement-notices-in-south-yorkshire/",
        "umbraco_id": 38707
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27102021-public-footpath-improvements-between-lundhill-road-and-wentworth-view/",
        "umbraco_id": 38711
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/27102021-barnsley-council-welcomes-transport-investment/",
        "umbraco_id": 38716
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/trade-at-our-markets/barnsley-young-trader-market/",
        "umbraco_id": 38720
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/",
        "umbraco_id": 38724
    },
    {
        "url": "https://www.barnsley.gov.uk/news/more-opportunities-to-get-involved-at-sustainability-events/",
        "umbraco_id": 38749
    },
    {
        "url": "https://www.barnsley.gov.uk/news/statement-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council-on-the-levelling-up-fund-round-1-announcement/",
        "umbraco_id": 38752
    },
    {
        "url": "https://www.barnsley.gov.uk/news/beat-the-street-barnsley-2021-encourages-70percent-of-inactive-children-and-63percent-of-inactive-adults-to-become-active/",
        "umbraco_id": 38782
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-children-in-barnsley/contextual-safeguarding/",
        "umbraco_id": 38783
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/age-friendly-barnsley/age-friendly-barnsley-festival/",
        "umbraco_id": 38794
    },
    {
        "url": "https://www.barnsley.gov.uk/news/syrian-refugee-puppet-little-amal-arrives-in-barnsley/",
        "umbraco_id": 38796
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/lost-property-in-taxi-and-private-hire-vehicles/",
        "umbraco_id": 38800
    },
    {
        "url": "https://www.barnsley.gov.uk/news/gritters-ready-to-hit-the-road-again-this-winter/",
        "umbraco_id": 38801
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/information-for-carers/",
        "umbraco_id": 38802
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/help-with-your-mental-health/",
        "umbraco_id": 38808
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-unites-to-honour-those-that-gave-their-lives-for-our-freedom-we-will-remember-them/",
        "umbraco_id": 38814
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/getting-help-early/",
        "umbraco_id": 38843
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/how-we-can-help-with-your-care-needs/",
        "umbraco_id": 38847
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/disabilities-and-sensory-impairments/",
        "umbraco_id": 38849
    },
    {
        "url": "https://www.barnsley.gov.uk/news/national-lottery-funding-awarded-to-get-more-people-active-through-football-in-kendray-and-worsbrough/",
        "umbraco_id": 38851
    },
    {
        "url": "https://www.barnsley.gov.uk/news/shop-owner-pleads-guilty-to-the-illegal-possession-of-smuggled-cigarettes/",
        "umbraco_id": 38852
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-shop-visitor-space-and-bakery-opens-at-worsbrough-mill/",
        "umbraco_id": 38864
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/cawthorne-village/",
        "umbraco_id": 38865
    },
    {
        "url": "https://www.barnsley.gov.uk/news/over-4000-holiday-club-spots-supported-children-to-have-a-healthy-holiday/",
        "umbraco_id": 38876
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/a628-manchester-road/",
        "umbraco_id": 38877
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-approves-the-draft-carlton-masterplan/",
        "umbraco_id": 38878
    },
    {
        "url": "https://www.barnsley.gov.uk/news/successful-school-streets-project-sets-the-scene-for-future-schemes/",
        "umbraco_id": 38883
    },
    {
        "url": "https://www.barnsley.gov.uk/services/planning-and-buildings/frequently-asked-questions-about-planning/",
        "umbraco_id": 38891
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-bright-nights-to-storm-into-town-centre-this-month/",
        "umbraco_id": 38896
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/regeneration-and-culture-roles/about-the-council/",
        "umbraco_id": 38915
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/regeneration-and-culture-roles/about-barnsley/",
        "umbraco_id": 38914
    },
    {
        "url": "https://www.barnsley.gov.uk/news/community-fridge-launches-in-darton-east-to-reduce-food-waste-and-bring-communities-together/",
        "umbraco_id": 38909
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/regeneration-and-culture-roles/",
        "umbraco_id": 38918
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/laithes-lane-athersley-south/",
        "umbraco_id": 38921
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a-new-plan-to-set-out-barnsley-s-private-sector-housing-ambitions/",
        "umbraco_id": 38924
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-members-to-discuss-an-independent-review-into-section-47-investigations/",
        "umbraco_id": 38926
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/regeneration-and-culture-roles/senior-regeneration-officer-role/",
        "umbraco_id": 38934
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/09112021-barnsley-council-moves-quickly-to-deal-with-fraud-attack/",
        "umbraco_id": 38942
    },
    {
        "url": "https://www.barnsley.gov.uk/news/takeoverday-is-back/",
        "umbraco_id": 38941
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-schools-catering-strategic-review/",
        "umbraco_id": 38945
    },
    {
        "url": "https://www.barnsley.gov.uk/news/market-position-statement-for-barnsley/",
        "umbraco_id": 38938
    },
    {
        "url": "https://www.barnsley.gov.uk/news/tell-us-your-thoughts-on-our-10000-trees-project/",
        "umbraco_id": 38948
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-proud-to-be-celebrating-safeguarding-awareness-week/",
        "umbraco_id": 38952
    },
    {
        "url": "https://www.barnsley.gov.uk/news/date-set-for-unveiling-of-barnsley-s-permanent-covid-memorial/",
        "umbraco_id": 38958
    },
    {
        "url": "https://www.barnsley.gov.uk/news/theres-a-neighbourhood-warden-near-you/",
        "umbraco_id": 38969
    },
    {
        "url": "https://www.barnsley.gov.uk/news/conviction-for-sale-of-illegal-cigarettes-sends-strong-message/",
        "umbraco_id": 38972
    },
    {
        "url": "https://www.barnsley.gov.uk/news/have-your-say-on-climate-action-in-barnsley/",
        "umbraco_id": 38974
    },
    {
        "url": "https://www.barnsley.gov.uk/news/andys-man-club-is-coming-to-barnsley/",
        "umbraco_id": 38978
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-fights-back-for-fraud-awareness-week/",
        "umbraco_id": 38986
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/barnsley-bright-nights-and-the-christmas-light-switch-on/",
        "umbraco_id": 38993
    },
    {
        "url": "https://www.barnsley.gov.uk/news/supporting-alcohol-awareness-week-2021/",
        "umbraco_id": 38995
    },
    {
        "url": "https://www.barnsley.gov.uk/news/leaders-from-across-south-yorkshire-come-together-to-celebrate-safeguarding-awareness-week/",
        "umbraco_id": 39028
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-s-freedom-of-the-borough-nominations-announced/",
        "umbraco_id": 39034
    },
    {
        "url": "https://www.barnsley.gov.uk/news/one-of-the-uk-s-first-permanent-covid-memorials-set-to-be-unveiled-in-barnsley/",
        "umbraco_id": 39040
    },
    {
        "url": "https://www.barnsley.gov.uk/news/inspection-of-barnsley-services-for-people-aged-0-25-years-with-send/",
        "umbraco_id": 39042
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-foster-carers-win-national-fostering-accolade/",
        "umbraco_id": 39068
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-director-of-public-health-barnsley-19-november-2021/",
        "umbraco_id": 39070
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19112021-statement-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council-regarding-the-cancellation-of-the-eastern-leg-of-hs2/",
        "umbraco_id": 39072
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/19112021-statement-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council-regarding-the-attack-on-our-councillor/",
        "umbraco_id": 39073
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/thomas-street-lower-thomas-street-new-street-and-upper-new-street/",
        "umbraco_id": 39086
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/dodworth-road-pogmoor-road-and-broadway-barnsley/",
        "umbraco_id": 39124
    },
    {
        "url": "https://www.barnsley.gov.uk/news/grant-to-support-households-with-living-costs-this-winter/",
        "umbraco_id": 39130
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-childcare-sufficiency-assessment-2021-annual-review/",
        "umbraco_id": 39132
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/better-lives-programme/",
        "umbraco_id": 39154
    },
    {
        "url": "https://www.barnsley.gov.uk/news/year-round-town-centre-events-programme-to-attract-even-more-visitors/",
        "umbraco_id": 39144
    },
    {
        "url": "https://www.barnsley.gov.uk/news/proud-to-care-launched-to-highlight-how-rewarding-a-career-in-care-can-be/",
        "umbraco_id": 39153
    },
    {
        "url": "https://www.barnsley.gov.uk/news/proposals-to-cut-heating-charges-for-communal-housing-tenants/",
        "umbraco_id": 39140
    },
    {
        "url": "https://www.barnsley.gov.uk/news/we-re-consulting-on-a-new-town-centre-pspo/",
        "umbraco_id": 39158
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-number-of-barnsley-care-leavers-achieving-their-potential-is-on-the-rise/",
        "umbraco_id": 39159
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-sculpture-goes-on-display-in-the-library-at-the-lightbox/",
        "umbraco_id": 39165
    },
    {
        "url": "https://www.barnsley.gov.uk/news/arts-and-craft-workshops-supporting-mental-wellbeing-in-barnsley/",
        "umbraco_id": 39185
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/changes-to-barnsley-bright-nights-programme/",
        "umbraco_id": 39190
    },
    {
        "url": "https://www.barnsley.gov.uk/services/bins-rubbish-and-recycling/changes-to-what-you-can-put-in-your-brown-bin/",
        "umbraco_id": 39198
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/halifax-road-penistone/",
        "umbraco_id": 39205
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/wombwell-footpath-no-1-and-worsbrough-footpath-no-17/",
        "umbraco_id": 39209
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-supports-fuel-poverty-awareness-day-2021/",
        "umbraco_id": 39212
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/drainage-and-flooding/lang-avenue-flood-alleviation-works/",
        "umbraco_id": 39217
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-nhs-and-barnsley-council-have-approved-a-gbp27million-additional-investment-into-a-range-of-health-and-social-care-services-ahead-of-this-winter/",
        "umbraco_id": 39222
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/2122021-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council-on-the-household-support-grant/",
        "umbraco_id": 39231
    },
    {
        "url": "https://www.barnsley.gov.uk/news/our-futures-now-barnsley-the-place-of-possibilities-book-celebrates-the-stories-from-barnsley-people/",
        "umbraco_id": 39239
    },
    {
        "url": "https://www.barnsley.gov.uk/news/centre-for-vocal-excellence-plan-for-historic-town-centre-building/",
        "umbraco_id": 39243
    },
    {
        "url": "https://www.barnsley.gov.uk/news/plastic-pots-tubs-and-trays-can-now-be-recycled-in-your-brown-bin/",
        "umbraco_id": 39244
    },
    {
        "url": "https://www.barnsley.gov.uk/news/join-the-search-for-santas-cheeky-elves/",
        "umbraco_id": 39252
    },
    {
        "url": "https://www.barnsley.gov.uk/news/provisional-educational-outcomes-for-2021/",
        "umbraco_id": 39289
    },
    {
        "url": "https://www.barnsley.gov.uk/news/property-investment-fund-set-to-further-boost-economic-growth/",
        "umbraco_id": 39293
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-five-year-plan-for-barnsley-town-centre/",
        "umbraco_id": 39296
    },
    {
        "url": "https://www.barnsley.gov.uk/news/online-consultation-on-climate-action-launched/",
        "umbraco_id": 39299
    },
    {
        "url": "https://www.barnsley.gov.uk/news/digital-volunteers-set-to-make-big-impact-for-barnsley-museums-thanks-to-national-lottery-funding/",
        "umbraco_id": 39301
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/level-2-mental-health-awareness/",
        "umbraco_id": 39302
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/level-1-award-in-helping-children-to-learn/",
        "umbraco_id": 39303
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/national-child-measurement-programme-ncmp/",
        "umbraco_id": 39304
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-10-december-2021/",
        "umbraco_id": 39310
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-and-volunteering/community-boost-assets/",
        "umbraco_id": 39313
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/employment-and-skills/work-it-your-way/",
        "umbraco_id": 39328
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/employment-and-skills/work-in-progress/",
        "umbraco_id": 39336
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/employment-and-skills/working-futures/",
        "umbraco_id": 39339
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/employment-and-skills/champion-good-work/",
        "umbraco_id": 39340
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/doncaster-road-kendray/",
        "umbraco_id": 39350
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/keresforth-hill-road-proposal/",
        "umbraco_id": 39351
    },
    {
        "url": "https://www.barnsley.gov.uk/news/welfare-support-service-for-people-at-higher-risk-of-winter-illnesses/",
        "umbraco_id": 39361
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-barnsley-music-education-hub-s-youngest-pupil-to-achieve-grade-8-award/",
        "umbraco_id": 39378
    },
    {
        "url": "https://www.barnsley.gov.uk/news/speakup-this-christmas/",
        "umbraco_id": 39379
    },
    {
        "url": "https://www.barnsley.gov.uk/news/fulfil-your-learning-potential-at-the-barnsley-adult-skills-and-community-learning-open-days/",
        "umbraco_id": 39395
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-17-december-2021/",
        "umbraco_id": 39396
    },
    {
        "url": "https://www.barnsley.gov.uk/news/join-in-the-christmas-fun-at-our-healthy-holidays-clubs/",
        "umbraco_id": 39397
    },
    {
        "url": "https://www.barnsley.gov.uk/services/libraries/school-visits-to-a-library/",
        "umbraco_id": 39408
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/understanding-domestic-abuse-in-barnsley/",
        "umbraco_id": 39417
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-s-0-19-public-health-nursing-service-rated-as-outstanding/",
        "umbraco_id": 39437
    },
    {
        "url": "https://www.barnsley.gov.uk/news/changes-to-bin-collections-over-the-festive-period/",
        "umbraco_id": 39462
    },
    {
        "url": "https://www.barnsley.gov.uk/news/south-yorkshire-police-off-road-bike-team-here-to-make-a-difference/",
        "umbraco_id": 39464
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/23122021-statement-from-cllr-tim-cheetham-cabinet-spokesperson-for-regeneration-and-culture-regarding-offensive-graffiti-at-penistone-market-barn/",
        "umbraco_id": 39472
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-24-december-2021/",
        "umbraco_id": 39479
    },
    {
        "url": "https://www.barnsley.gov.uk/news/help-for-local-green-projects/",
        "umbraco_id": 39483
    },
    {
        "url": "https://www.barnsley.gov.uk/news/improving-pathways-into-council-apprenticeships/",
        "umbraco_id": 39485
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a628-dodworth-road-improvement-scheme-planned-diversions/",
        "umbraco_id": 39488
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-energy-efficient-housing-plans-set-for-approval/",
        "umbraco_id": 39491
    },
    {
        "url": "https://www.barnsley.gov.uk/news/thank-you-and-farewell-to-retiring-councillor-dorothy-higginbottom/",
        "umbraco_id": 39503
    },
    {
        "url": "https://www.barnsley.gov.uk/services/markets/trade-at-our-markets/the-cabinet/",
        "umbraco_id": 39511
    },
    {
        "url": "https://www.barnsley.gov.uk/news/we-want-your-feedback-on-our-proposed-carers-strategy-priorities/",
        "umbraco_id": 39542
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/transport-projects/",
        "umbraco_id": 39543
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-joins-the-fight-to-improve-children-s-health-and-reduce-obesity-with-a-few-simple-swaps/",
        "umbraco_id": 39554
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/",
        "umbraco_id": 39555
    },
    {
        "url": "https://www.barnsley.gov.uk/news/free-training-to-develop-and-improve-digital-skills-for-work/",
        "umbraco_id": 39564
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/",
        "umbraco_id": 39572
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/",
        "umbraco_id": 39573
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/special-educational-needs/",
        "umbraco_id": 39574
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/guidance-and-support/",
        "umbraco_id": 39575
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/local-services/",
        "umbraco_id": 39576
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/pshe-and-rhse-dates/",
        "umbraco_id": 39577
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/07012022-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council-on-the-impact-of-covid-19-on-council-services/",
        "umbraco_id": 39580
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-and-barnsley-hospital-working-in-partnership-to-support-families/",
        "umbraco_id": 39590
    },
    {
        "url": "https://www.barnsley.gov.uk/news/uncovered-masterpiece-soon-to-be-on-display-in-cannon-hall/",
        "umbraco_id": 39593
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/tankersley-footpath-no-26-and-27-and-hoyland-footpath-no-27/",
        "umbraco_id": 39605
    },
    {
        "url": "https://www.barnsley.gov.uk/news/river-island-and-fridays-next-to-join-barnsley-s-thriving-retail-and-leisure-scene/",
        "umbraco_id": 39616
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-tasker-photography-trust-opens-new-exhibition-at-the-cooper-gallery/",
        "umbraco_id": 39620
    },
    {
        "url": "https://www.barnsley.gov.uk/news/school-trips-are-back-on-at-barnsley-museums/",
        "umbraco_id": 39622
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-libraries-shortlisted-in-the-2022-hearts-for-the-arts-awards/",
        "umbraco_id": 39640
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-2022-bin-calendars-are-now-available-online/",
        "umbraco_id": 39648
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a628-dodworth-road-improvements-new-temporary-road-layout/",
        "umbraco_id": 39649
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/transport-projects/a61-royston-active-travel-scheme/",
        "umbraco_id": 39651
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/transport-projects/a635-active-travel-scheme/",
        "umbraco_id": 39652
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/keresforth-hill-road/",
        "umbraco_id": 39662
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/darton-primary-school/",
        "umbraco_id": 39667
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/huddersfield-road-penistone/",
        "umbraco_id": 39673
    },
    {
        "url": "https://www.barnsley.gov.uk/news/plans-to-introduce-new-taxi-and-private-hire-licensing-standards-in-barnsley/",
        "umbraco_id": 39674
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/hoyland-town-centre/",
        "umbraco_id": 39688
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/wentworth-road-elsecar/",
        "umbraco_id": 39691
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-secures-gbp24m-grant-for-community-boost-project/",
        "umbraco_id": 39693
    },
    {
        "url": "https://www.barnsley.gov.uk/news/investment-work-at-two-much-loved-barnsley-reservoirs/",
        "umbraco_id": 39704
    },
    {
        "url": "https://www.barnsley.gov.uk/news/market-gate-bridge-construction-to-begin/",
        "umbraco_id": 39712
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-commemorates-holocaust-memorial-day-to-create-a-safer-future/",
        "umbraco_id": 39716
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/information-for-carers/carers-assessment/",
        "umbraco_id": 39717
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-social-care/information-for-carers/carer-support-groups-and-organisations/",
        "umbraco_id": 39720
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/sheffield-road-hoyland-proposal/",
        "umbraco_id": 39722
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/dunford-bridleway-nos-25-and-26/",
        "umbraco_id": 39727
    },
    {
        "url": "https://www.barnsley.gov.uk/news/artwork-transferred-to-the-nation-set-to-go-in-display-in-the-cooper-gallery/",
        "umbraco_id": 39730
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/20012022-statement-from-cllr-tim-cheetham-cabinet-spokesperson-for-regeneration-and-culture-regarding-market-gate-bridge/",
        "umbraco_id": 39731
    },
    {
        "url": "https://www.barnsley.gov.uk/news/mayor-of-barnsley-plants-the-first-tree-in-royston-park-to-mark-her-majesty-s-platinum-jubliee/",
        "umbraco_id": 39740
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/the-seam-consultation/",
        "umbraco_id": 39747
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cervical-cancer-prevention-week-get-involved/",
        "umbraco_id": 39751
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-friday-21-january-2022/",
        "umbraco_id": 39753
    },
    {
        "url": "https://www.barnsley.gov.uk/news/penistone-market-barn-update/",
        "umbraco_id": 39760
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-museums-digital-engagement-curator-michael-hardy-wins-emerging-digital-leader-category-in-arts-council-england-and-the-digital-culture-network-s-digital-culture-awards/",
        "umbraco_id": 39762
    },
    {
        "url": "https://www.barnsley.gov.uk/news/what-a-crushing-way-to-start-2022/",
        "umbraco_id": 39779
    },
    {
        "url": "https://www.barnsley.gov.uk/news/pioneering-fostering-programme-supports-29-looked-after-children-and-their-foster-carers-in-barnsley/",
        "umbraco_id": 39781
    },
    {
        "url": "https://www.barnsley.gov.uk/news/energy-efficient-new-council-houses-to-set-new-low-carbon-standards/",
        "umbraco_id": 39788
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-approves-next-steps-for-bridge-linking-penny-pie-park-with-pogmoor/",
        "umbraco_id": 39790
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-proud-to-be-celebrating-lgbtplus-history-month/",
        "umbraco_id": 39799
    },
    {
        "url": "https://www.barnsley.gov.uk/news/consultation-underway-on-local-high-streets-investment-programme/",
        "umbraco_id": 39804
    },
    {
        "url": "https://www.barnsley.gov.uk/news/volunteers-uncover-hidden-set-of-stairs-at-worsbrough-mill/",
        "umbraco_id": 39810
    },
    {
        "url": "https://www.barnsley.gov.uk/news/ambitious-investment-plan-approved-by-cabinet/",
        "umbraco_id": 39812
    },
    {
        "url": "https://www.barnsley.gov.uk/news/protect-barnsley-s-history-through-the-south-yorkshire-local-heritage-list/",
        "umbraco_id": 39815
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-the-place-of-possibilities-looking-forward-to-2022-with-excitement-and-optimism/",
        "umbraco_id": 39816
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/dunford-bridleway-no-4-and-footpath-no-5/",
        "umbraco_id": 39819
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/sheffield-road-hoyland/",
        "umbraco_id": 39820
    },
    {
        "url": "https://www.barnsley.gov.uk/news/ambitious-flood-action-plan-launched-to-tackle-climate-emergency-in-south-yorkshire/",
        "umbraco_id": 39829
    },
    {
        "url": "https://www.barnsley.gov.uk/services/get-online-with-us/superfast-south-yorkshire/",
        "umbraco_id": 39832
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-works-with-local-takeaways-to-make-sure-systems-are-safe/",
        "umbraco_id": 39842
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/emotional-health-and-wellbeing/",
        "umbraco_id": 39853
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/relationships-and-sex-education/",
        "umbraco_id": 39854
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/physical-health/",
        "umbraco_id": 39855
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/other-primary-resources/",
        "umbraco_id": 39859
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/emotional-health-and-wellbeing/",
        "umbraco_id": 39861
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/relationships-and-sex-education/",
        "umbraco_id": 39862
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/physical-health/",
        "umbraco_id": 39863
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/other-secondary-resources/",
        "umbraco_id": 39864
    },
    {
        "url": "https://www.barnsley.gov.uk/news/no-matter-what-the-weather-is-stay-active-this-febru-welly/",
        "umbraco_id": 39904
    },
    {
        "url": "https://www.barnsley.gov.uk/news/renewi-corporate-social-responsibility-fund-deadline-extended/",
        "umbraco_id": 39910
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/school-finance-section-251-budget-and-outturn/",
        "umbraco_id": 39917
    },
    {
        "url": "https://www.barnsley.gov.uk/news/public-views-sought-on-new-green-development-in-heart-of-town-centre/",
        "umbraco_id": 39920
    },
    {
        "url": "https://www.barnsley.gov.uk/news/words-from-poet-laureate-bring-derelict-barnsley-alleyway-back-to-life/",
        "umbraco_id": 39925
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/allowing-habitats-and-wildflowers-to-grow/",
        "umbraco_id": 39926
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-s-proposed-budget-boosts-investment-in-communities/",
        "umbraco_id": 39931
    },
    {
        "url": "https://www.barnsley.gov.uk/news/work-begins-on-development-of-35-homes/",
        "umbraco_id": 39943
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsleys-innovative-click-and-collect-service-to-launch-this-month/",
        "umbraco_id": 39956
    },
    {
        "url": "https://www.barnsley.gov.uk/news/soaring-footfall-by-day-flying-the-purple-flag-by-night/",
        "umbraco_id": 39960
    },
    {
        "url": "https://www.barnsley.gov.uk/news/fall-in-love-with-barnsley-this-month/",
        "umbraco_id": 39963
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/faith-and-religion/",
        "umbraco_id": 39964
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/equality-and-diversity/",
        "umbraco_id": 39965
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/lgbt/",
        "umbraco_id": 39966
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/primary-pshe-and-rshe-education/internet-safety/",
        "umbraco_id": 39967
    },
    {
        "url": "https://www.barnsley.gov.uk/services/voting-and-elections/recent-elections/local-government-elections-2022/",
        "umbraco_id": 39973
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-more-music-programmes-in-our-schools-across-barnsley/",
        "umbraco_id": 39978
    },
    {
        "url": "https://www.barnsley.gov.uk/news/captivating-science-and-art-project-announced-for-cooper-gallery/",
        "umbraco_id": 39985
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-celebrates-national-apprenticeship-week-2022/",
        "umbraco_id": 39987
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/faith-and-religion/",
        "umbraco_id": 39998
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/equality-and-diversity/",
        "umbraco_id": 39999
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/lgbt/",
        "umbraco_id": 40000
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/secondary-pshe-and-rshe-education/internet-safety/",
        "umbraco_id": 40001
    },
    {
        "url": "https://www.barnsley.gov.uk/news/leading-supplier-of-fan-merchandise-moves-to-barnsley-and-creates-new-jobs/",
        "umbraco_id": 40012
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/dunford-footpath-no11/",
        "umbraco_id": 40024
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/core-services-roles/",
        "umbraco_id": 40027
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/core-services-roles/about-barnsley/",
        "umbraco_id": 40028
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/core-services-roles/about-the-council/",
        "umbraco_id": 40029
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/core-services-roles/about-core-services/",
        "umbraco_id": 40030
    },
    {
        "url": "https://www.barnsley.gov.uk/news/gbp17m-secured-to-upgrade-energy-efficiency-of-council-housing-stock/",
        "umbraco_id": 40036
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-museums-needs-you/",
        "umbraco_id": 40039
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/council-plan/2022-2023-budget/",
        "umbraco_id": 40043
    },
    {
        "url": "https://www.barnsley.gov.uk/news/fit-out-begins-on-barnsley-s-new-13-screen-cineworld/",
        "umbraco_id": 40053
    },
    {
        "url": "https://www.barnsley.gov.uk/news/assessment-of-bus-franchising-option-for-south-yorkshire/",
        "umbraco_id": 40061
    },
    {
        "url": "https://www.barnsley.gov.uk/news/hundreds-of-local-businesses-to-benefit-from-additional-covid-19-financial-support/",
        "umbraco_id": 40063
    },
    {
        "url": "https://www.barnsley.gov.uk/news/eligible-households-set-to-receive-gbp150-council-tax-energy-rebate/",
        "umbraco_id": 40065
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-service-send-and-inclusion/",
        "umbraco_id": 40080
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-service-send-and-inclusion/about-barnsley/",
        "umbraco_id": 40081
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-service-send-and-inclusion/about-the-council/",
        "umbraco_id": 40082
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-service-send-and-inclusion/about-the-childrens-services-directorate/",
        "umbraco_id": 40083
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-service-send-and-inclusion/about-the-role/",
        "umbraco_id": 40084
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-service-send-and-inclusion/apply/",
        "umbraco_id": 40085
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a-new-exhibition-is-rolling-into-the-cooper-gallery/",
        "umbraco_id": 40092
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/16022022-statement-from-cllr-tim-cheetham-cabinet-spokesperson-for-regeneration-and-culture-regarding-investment-plans-for-hoyland-and-other-principal-towns/",
        "umbraco_id": 40096
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/health-and-social-care/introduction-to-understanding-mental-health/",
        "umbraco_id": 40107
    },
    {
        "url": "https://www.barnsley.gov.uk/services/adult-skills-and-community-learning/working-with-children-and-families/learning-through-play/",
        "umbraco_id": 40108
    },
    {
        "url": "https://www.barnsley.gov.uk/news/voting-now-open-for-best-bar-none-people-s-choice-award/",
        "umbraco_id": 40117
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/core-services-roles/search-for-a-role-in-core-services/",
        "umbraco_id": 40120
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a-new-centre-opens-at-library-at-the-lightbox-to-support-local-entrepreneurs-inventors-and-small-businesses/",
        "umbraco_id": 40124
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-botanist-to-join-impressive-collection-of-brands-at-the-glass-works/",
        "umbraco_id": 40126
    },
    {
        "url": "https://www.barnsley.gov.uk/news/landlords-urged-to-seek-support-to-insulate-homes/",
        "umbraco_id": 40133
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/royston-bridleway-no-17/",
        "umbraco_id": 40148
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-executive-director-announced-for-barnsley-council/",
        "umbraco_id": 40150
    },
    {
        "url": "https://www.barnsley.gov.uk/news/consultation-into-the-2023-boundary-review-for-barnsley/",
        "umbraco_id": 40152
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-reminds-all-food-businesses-in-barnsley-that-they-must-register-with-them-28-days-before-opening/",
        "umbraco_id": 40172
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/schools-and-learning/healthier-futures-barnsley/lets-hear-your-voice-survey/",
        "umbraco_id": 40177
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-of-public-health-friday-25-february/",
        "umbraco_id": 40191
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-delivery-plans/",
        "umbraco_id": 40192
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-delivery-plans/growing-barnsley-delivery-plan/",
        "umbraco_id": 40193
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-delivery-plans/healthy-barnsley-delivery-plan/",
        "umbraco_id": 40197
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-delivery-plans/learning-barnsley-delivery-plan/",
        "umbraco_id": 40198
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/barnsley-2030/barnsley-2030-delivery-plans/sustainable-barnsley-delivery-plan/",
        "umbraco_id": 40199
    },
    {
        "url": "https://www.barnsley.gov.uk/news/statement-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council-cllr-hannah-kitching-leader-of-the-liberal-democrats-and-cllr-john-wilson-leader-of-the-conservative-group-in-response-to-the-russian-invasion-of-ukraine/",
        "umbraco_id": 40207
    },
    {
        "url": "https://www.barnsley.gov.uk/news/nearly-94-per-cent-of-barnsley-children-get-their-first-choice-of-secondary-school-for-september/",
        "umbraco_id": 40230
    },
    {
        "url": "https://www.barnsley.gov.uk/news/derelict-building-transformed-into-learning-space/",
        "umbraco_id": 40234
    },
    {
        "url": "https://www.barnsley.gov.uk/news/art-detectives-uncover-mystery-of-cooper-collection-painting/",
        "umbraco_id": 40236
    },
    {
        "url": "https://www.barnsley.gov.uk/news/prosecution-for-blue-badge-misuse/",
        "umbraco_id": 40242
    },
    {
        "url": "https://www.barnsley.gov.uk/news/latest-performance-report-reveals-positive-progress-in-growing-and-healthy-barnsley/",
        "umbraco_id": 40244
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/",
        "umbraco_id": 40247
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/financial-management/",
        "umbraco_id": 40250
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/budget-setting/",
        "umbraco_id": 40248
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/accounts-closure/",
        "umbraco_id": 40260
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/statutory-regulations/",
        "umbraco_id": 40268
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/procurement/",
        "umbraco_id": 40276
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/payments/",
        "umbraco_id": 40278
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-budgets-and-finances/audit/",
        "umbraco_id": 40279
    },
    {
        "url": "https://www.barnsley.gov.uk/services/community-safety-and-crime/safer-barnsley-partnership/safer-barnsley-partnership-2022/",
        "umbraco_id": 40280
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/situation-in-ukraine/",
        "umbraco_id": 40287
    },
    {
        "url": "https://www.barnsley.gov.uk/news/consultation-begins-on-two-new-active-travel-schemes/",
        "umbraco_id": 40292
    },
    {
        "url": "https://www.barnsley.gov.uk/news/our-futures-now-book-begins-its-tour-around-barnsley-libraries/",
        "umbraco_id": 40295
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-crematorium-donates-gbp15000-to-macmillan-cancer-support/",
        "umbraco_id": 40297
    },
    {
        "url": "https://www.barnsley.gov.uk/news/another-successful-operation-duxford/",
        "umbraco_id": 40300
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/business-education-alliance/",
        "umbraco_id": 40329
    },
    {
        "url": "https://www.barnsley.gov.uk/news/lgbtplus-people-in-barnsley-invited-to-bethechange-for-a-child/",
        "umbraco_id": 40333
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/thurgoland-footpath-no-18-diversion-order/",
        "umbraco_id": 40349
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/thurgoland-footpath-no-18-extinguishment-and-creation-orders/",
        "umbraco_id": 40353
    },
    {
        "url": "https://www.barnsley.gov.uk/news/our-people-strategy-launched-to-help-us-deliver-on-our-ambitions-for-barnsley/",
        "umbraco_id": 40375
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-members-approve-extended-funding-to-help-barnsley-people-back-into-work/",
        "umbraco_id": 40379
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-supports-food-waste-action-week/",
        "umbraco_id": 40384
    },
    {
        "url": "https://www.barnsley.gov.uk/news/boost-your-skills-confidence-and-job-prospects-with-community-boost-central/",
        "umbraco_id": 40396
    },
    {
        "url": "https://www.barnsley.gov.uk/services/museums-and-galleries/sell-your-work-through-barnsley-museums/",
        "umbraco_id": 40397
    },
    {
        "url": "https://www.barnsley.gov.uk/news/message-from-julia-burrows-barnsley-director-for-public-health-friday-11-march/",
        "umbraco_id": 40400
    },
    {
        "url": "https://www.barnsley.gov.uk/news/more-trees-planted-to-mark-her-majesty-s-seventieth-anniversary/",
        "umbraco_id": 40401
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-museums-to-receive-gbp393m-funding-which-helps-safeguard-nations-cultural-heritage/",
        "umbraco_id": 40410
    },
    {
        "url": "https://www.barnsley.gov.uk/news/shop-closed-as-part-of-work-to-tackle-illegal-tobacco-trade/",
        "umbraco_id": 40415
    },
    {
        "url": "https://www.barnsley.gov.uk/news/items-that-belonged-to-cannon-hall-s-famous-family-are-returned/",
        "umbraco_id": 40419
    },
    {
        "url": "https://www.barnsley.gov.uk/news/gender-pay-gap-report-highlights-pay-gaps-have-positively-reduced/",
        "umbraco_id": 40423
    },
    {
        "url": "https://www.barnsley.gov.uk/news/140-school-places-to-be-created-at-cudworth-s-birkwood-primary-school/",
        "umbraco_id": 40425
    },
    {
        "url": "https://www.barnsley.gov.uk/news/multi-million-investment-to-transform-local-high-streets-across-the-borough/",
        "umbraco_id": 40428
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/public-health-nursing-service-roles/",
        "umbraco_id": 40429
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/public-health-nursing-service-roles/about-barnsley/",
        "umbraco_id": 40430
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/public-health-nursing-service-roles/about-the-council/",
        "umbraco_id": 40431
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/public-health-nursing-service-roles/about-our-public-health-directorate/",
        "umbraco_id": 40432
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/public-health-nursing-service-roles/search-for-a-role-in-0-19-public-health-nursing/",
        "umbraco_id": 40433
    },
    {
        "url": "https://www.barnsley.gov.uk/news/young-people-get-involved-have-their-say-and-make-their-mark/",
        "umbraco_id": 40437
    },
    {
        "url": "https://www.barnsley.gov.uk/news/consultation-on-new-order-to-prevent-fires-in-moorland-areas/",
        "umbraco_id": 40439
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/hoyland-footpath-no-5-and-6-and-worsbrough-footpath-no-40/",
        "umbraco_id": 40455
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a-new-way-to-manage-our-grasslands/",
        "umbraco_id": 40456
    },
    {
        "url": "https://www.barnsley.gov.uk/news/social-care-day-of-remembrance-and-reflection-thursday-17-march-2022/",
        "umbraco_id": 40460
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-pcr-testing-sites-are-closing/",
        "umbraco_id": 40462
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-will-discuss-the-renewal-of-the-town-centre-pspo/",
        "umbraco_id": 40465
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-shortlisted-for-three-local-government-chronicle-awards/",
        "umbraco_id": 40467
    },
    {
        "url": "https://www.barnsley.gov.uk/news/council-supporting-dearne-communities-to-transform-through-major-investment/",
        "umbraco_id": 40470
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-presented-with-international-safety-award-for-protecting-its-employees-from-the-risk-of-injury-and-ill-health-at-work/",
        "umbraco_id": 40477
    },
    {
        "url": "https://www.barnsley.gov.uk/news/highways-capital-programme-for-202223-recommended-for-approval/",
        "umbraco_id": 40479
    },
    {
        "url": "https://www.barnsley.gov.uk/news/service-at-barnsley-s-covid-memorial-to-mark-the-national-day-of-reflection/",
        "umbraco_id": 40481
    },
    {
        "url": "https://www.barnsley.gov.uk/services/births-deaths-and-marriages/marriages-and-civil-partnerships/ceremony-booking-terms-and-conditions/",
        "umbraco_id": 40487
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-energy-efficient-council-housing-in-athersley-south/",
        "umbraco_id": 40489
    },
    {
        "url": "https://www.barnsley.gov.uk/news/brass-band-scoops-trophy-and-place-at-national-finals/",
        "umbraco_id": 40491
    },
    {
        "url": "https://www.barnsley.gov.uk/news/boats-are-back-at-cannon-hall-park-and-gardens/",
        "umbraco_id": 40501
    },
    {
        "url": "https://www.barnsley.gov.uk/news/co-op-s-history-celebrated-through-online-exhibition/",
        "umbraco_id": 40516
    },
    {
        "url": "https://www.barnsley.gov.uk/news/exclusive-graham-ibbeson-exhibition-arrives-at-the-glass-works/",
        "umbraco_id": 40518
    },
    {
        "url": "https://www.barnsley.gov.uk/news/find-out-more-about-adult-skills-and-community-learning-at-their-open-day/",
        "umbraco_id": 40520
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cabinet-approves-development-of-parkside-community-and-sports-facility/",
        "umbraco_id": 40525
    },
    {
        "url": "https://www.barnsley.gov.uk/news/south-yorkshire-is-leading-the-way-in-ensuring-new-build-homes-are-ready-for-the-future/",
        "umbraco_id": 40527
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax/gbp150-council-tax-rebate-from-the-government/",
        "umbraco_id": 40551
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/project-manager-regeneration/",
        "umbraco_id": 40556
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/project-manager-regeneration/about-barnsley/",
        "umbraco_id": 40557
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/council-tax-messaging-service/",
        "umbraco_id": 40558
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/project-manager-regeneration/about-the-council/",
        "umbraco_id": 40560
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/ukraine-support-300322/",
        "umbraco_id": 40569
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/supported-employment/",
        "umbraco_id": 40570
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/project-manager-regeneration/project-manager-role/",
        "umbraco_id": 40573
    },
    {
        "url": "https://www.barnsley.gov.uk/news/two-weeks-left-to-register-to-vote-in-upcoming-elections/",
        "umbraco_id": 40580
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-serves-up-captivating-social-history-exhibition/",
        "umbraco_id": 40582
    },
    {
        "url": "https://www.barnsley.gov.uk/news/world-class-moorcroft-pottery-on-display-for-the-first-time-in-cannon-hall-museum/",
        "umbraco_id": 40597
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cannon-hall-goes-digital-for-de-morgan-month/",
        "umbraco_id": 40620
    },
    {
        "url": "https://www.barnsley.gov.uk/news/clear-out-to-help-out-by-donating-unwanted-items/",
        "umbraco_id": 40621
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/advance-developing-your-skills-for-work/",
        "umbraco_id": 40628
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-announces-jon-finch-as-the-new-head-of-culture-and-visitor-economy/",
        "umbraco_id": 40633
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-and-barnsley-hospital-partner-up-on-new-financial-incentive-scheme-to-support-pregnant-women-to-quit-smoking/",
        "umbraco_id": 40637
    },
    {
        "url": "https://www.barnsley.gov.uk/news/record-number-of-visitors-for-barnsley-museums/",
        "umbraco_id": 40639
    },
    {
        "url": "https://www.barnsley.gov.uk/news/join-in-the-fun-this-easter-with-our-healthy-holidays-clubs/",
        "umbraco_id": 40640
    },
    {
        "url": "https://www.barnsley.gov.uk/news/you-don-t-always-know-what-goes-on-behind-closed-doors-speakup-about-domestic-abuse/",
        "umbraco_id": 40641
    },
    {
        "url": "https://www.barnsley.gov.uk/news/freedom-of-the-borough-nominees-set-to-be-bestowed-with-honorary-titles/",
        "umbraco_id": 40645
    },
    {
        "url": "https://www.barnsley.gov.uk/news/prosecution-for-counterfeit-wonka-bar-seller/",
        "umbraco_id": 40647
    },
    {
        "url": "https://www.barnsley.gov.uk/news/another-successful-takeoverchallenge-with-a-record-number-of-barnsley-young-people/",
        "umbraco_id": 40651
    },
    {
        "url": "https://www.barnsley.gov.uk/news/adult-skills-and-community-learning-has-self-assessment-reviewed-at-cabinet/",
        "umbraco_id": 40652
    },
    {
        "url": "https://www.barnsley.gov.uk/news/take-part-in-barnsley-s-dress-to-impress-b-inspired-exhibition-this-april/",
        "umbraco_id": 40655
    },
    {
        "url": "https://www.barnsley.gov.uk/news/views-shared-on-development-of-new-digital-campus-in-the-heart-of-the-town-centre/",
        "umbraco_id": 40656
    },
    {
        "url": "https://www.barnsley.gov.uk/news/female-business-owners-of-eldon-street-celebrated-during-womens-history-month/",
        "umbraco_id": 40662
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/welcome-to-barnsley/",
        "umbraco_id": 40665
    },
    {
        "url": "https://www.barnsley.gov.uk/news/one-week-left-to-register-to-vote-in-upcoming-elections/",
        "umbraco_id": 40680
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-fashion-and-lifestyle-in-barnsley-town-centre-this-april/",
        "umbraco_id": 40704
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-executive-director-of-children-s-services-announced-for-barnsley-council/",
        "umbraco_id": 40717
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/",
        "umbraco_id": 40741
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/housing-support/",
        "umbraco_id": 40743
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/support-with-utility-bills/",
        "umbraco_id": 40744
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/food-support/",
        "umbraco_id": 40745
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/budgeting-support/",
        "umbraco_id": 40746
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/worried-about-money/",
        "umbraco_id": 40747
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-receives-rospa-order-of-distinction-award-for-health-and-safety-achievements/",
        "umbraco_id": 40756
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/domestic-abuse-strategy/",
        "umbraco_id": 40762
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-museums-at-worsbrough-mill-to-receive-gbp180000-in-fund-to-support-community-volunteering-opportunities-through-uk-government-investment/",
        "umbraco_id": 40800
    },
    {
        "url": "https://www.barnsley.gov.uk/news/over-94-per-cent-of-barnsley-children-get-their-first-choice-of-primary-school-for-september/",
        "umbraco_id": 40817
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/town-centre-car-parks-proposal/",
        "umbraco_id": 40825
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-information/business-resilience-awards-2022/",
        "umbraco_id": 40832
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/",
        "umbraco_id": 40851
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/things-to-see-and-do/",
        "umbraco_id": 40854
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/whats-on/",
        "umbraco_id": 40855
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/shopping-and-retail/",
        "umbraco_id": 40856
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/places-to-stay/",
        "umbraco_id": 40857
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/food-and-drink/",
        "umbraco_id": 40858
    },
    {
        "url": "https://www.barnsley.gov.uk/services/love-barnsley/visit-barnsley/getting-in-and-around-barnsley/",
        "umbraco_id": 40859
    },
    {
        "url": "https://www.barnsley.gov.uk/news/a-written-statement-of-action-for-barnsley-services-for-people-aged-0-25-years-with-send/",
        "umbraco_id": 40871
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/public-health-nursing-service-roles/what-our-employees-say/",
        "umbraco_id": 40884
    },
    {
        "url": "https://www.barnsley.gov.uk/news/excitement-building-in-barnsley-ahead-of-the-queen-s-platinum-jubilee/",
        "umbraco_id": 40885
    },
    {
        "url": "https://www.barnsley.gov.uk/news/make-sure-you-re-ready-to-have-your-say-on-5-may/",
        "umbraco_id": 40888
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-hosts-its-first-ever-creativity-and-wellbeing-week/",
        "umbraco_id": 40911
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/22422-grimethorpe-family-centre/",
        "umbraco_id": 40915
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-launches-exciting-new-project-to-improve-children-s-health-and-wellbeing/",
        "umbraco_id": 40923
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-to-receive-funding-for-family-hubs/",
        "umbraco_id": 40940
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/national-register-of-taxi-licence-refusals-and-revocations-nr3/",
        "umbraco_id": 40941
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/for-professionals-and-volunteers/training-and-events-calendar/",
        "umbraco_id": 40945
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/barnsley-footpath-no159/",
        "umbraco_id": 40950
    },
    {
        "url": "https://www.barnsley.gov.uk/barnsley-maps/brownfield-land-register/",
        "umbraco_id": 40955
    },
    {
        "url": "https://www.barnsley.gov.uk/services/business-rates/requests-for-information-about-business-rates/foi-extracts-april-2022/",
        "umbraco_id": 40960
    },
    {
        "url": "https://www.barnsley.gov.uk/news/suspended-jail-sentence-for-selling-counterfeit-wonka-bar-sends-a-strong-message/",
        "umbraco_id": 40986
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/notice-of-application-for-review-of-premises-licence-for-sugar-club/",
        "umbraco_id": 40989
    },
    {
        "url": "https://www.barnsley.gov.uk/services/licensing/taxi-licences/freedom-of-information-foi-requests-for-hackney-carriage-and-private-hire-vehicle-licences/",
        "umbraco_id": 40994
    },
    {
        "url": "https://www.barnsley.gov.uk/news/walk-more-this-may-as-we-celebrate-barnsley-walking-festival/",
        "umbraco_id": 41006
    },
    {
        "url": "https://www.barnsley.gov.uk/services/events/the-queens-platinum-jubilee/",
        "umbraco_id": 41009
    },
    {
        "url": "https://www.barnsley.gov.uk/services/events/the-queens-platinum-jubilee/platinum-jubilee-gallery/",
        "umbraco_id": 41019
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-service-director-for-law-and-governance-for-core-services-announced/",
        "umbraco_id": 41022
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/digital-skills-and-learning/",
        "umbraco_id": 41034
    },
    {
        "url": "https://www.barnsley.gov.uk/news/everything-you-need-to-know-about-voting-in-person-at-this-years-local-elections/",
        "umbraco_id": 41039
    },
    {
        "url": "https://www.barnsley.gov.uk/news/online-recruitment-fair-to-showcase-barnsleys-health-and-care-jobs/",
        "umbraco_id": 41048
    },
    {
        "url": "https://www.barnsley.gov.uk/services/parks-and-open-spaces/park-maintenance/",
        "umbraco_id": 41053
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-s-local-election-2022-results-announced/",
        "umbraco_id": 41057
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/key-projects/towns-fund-deal-goldthorpe/towns-fund-deal-goldthorpe-frequently-asked-questions/",
        "umbraco_id": 41063
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-local-government-elections-2022-update-on-royston-ward-count/",
        "umbraco_id": 41070
    },
    {
        "url": "https://www.barnsley.gov.uk/news/budding-young-artists-show-us-what-matters-to-them-for-director-of-public-health-report/",
        "umbraco_id": 41073
    },
    {
        "url": "https://www.barnsley.gov.uk/news/could-you-be-part-of-barnsley-s-fostering-community/",
        "umbraco_id": 41075
    },
    {
        "url": "https://www.barnsley.gov.uk/news/find-out-about-getting-back-into-learning-at-barnsley-s-adult-skills-and-community-learning-open-day/",
        "umbraco_id": 41078
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/lundhill-road/",
        "umbraco_id": 41080
    },
    {
        "url": "https://www.barnsley.gov.uk/services/advice-benefits-and-council-tax/financial-support-for-households/food-support/pocket-friendly-recipes/",
        "umbraco_id": 41091
    },
    {
        "url": "https://www.barnsley.gov.uk/services/regeneration/key-projects/towns-fund-deal-goldthorpe/goldthorpe-housing-project-public-consultation-survey/",
        "umbraco_id": 41401
    },
    {
        "url": "https://www.barnsley.gov.uk/news/children-s-social-care-rises-to-the-challenge/",
        "umbraco_id": 41404
    },
    {
        "url": "https://www.barnsley.gov.uk/news/electric-waste-collection-vehicle-to-be-added-to-fleet/",
        "umbraco_id": 41407
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-welcomes-twin-town-officials-to-celebrate-50th-anniversary/",
        "umbraco_id": 41413
    },
    {
        "url": "https://www.barnsley.gov.uk/news/cannon-hall-s-most-sociable-family-brought-to-life-in-new-exhibition/",
        "umbraco_id": 41418
    },
    {
        "url": "https://www.barnsley.gov.uk/news/major-gbp231m-investment-projects-for-dearne-valley/",
        "umbraco_id": 41425
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-one-stop-shop-for-family-information-in-barnsley-launched/",
        "umbraco_id": 41427
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/110522-statement-from-cllr-alan-gardiner-regarding-the-freedom-of-the-borough-event/",
        "umbraco_id": 41428
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-set-to-light-beacon-to-kickstart-platinum-jubilee-celebrations/",
        "umbraco_id": 41437
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/child-exploitation-strategy/",
        "umbraco_id": 41438
    },
    {
        "url": "https://www.barnsley.gov.uk/news/business-growth-sees-company-expanding-into-new-barnsley-warehouse-and-office-premises/",
        "umbraco_id": 41455
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/healthy-holidays-clubs-feedback/",
        "umbraco_id": 41461
    },
    {
        "url": "https://www.barnsley.gov.uk/news/organisations-across-barnsley-come-together-to-celebrate-dementia-action-week/",
        "umbraco_id": 41512
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/digital-skills-and-learning/improve-your-digital-skills/",
        "umbraco_id": 41521
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/digital-skills-and-learning/develop-your-digital-skills-for-work/",
        "umbraco_id": 41523
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/digital-skills-and-learning/digital-skills-qualifications/",
        "umbraco_id": 41524
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/digital-skills-and-learning/staying-safe-when-youre-online/",
        "umbraco_id": 41525
    },
    {
        "url": "https://www.barnsley.gov.uk/news/leading-energy-solutions-company-sms-opens-distribution-hub-in-barnsley/",
        "umbraco_id": 41529
    },
    {
        "url": "https://www.barnsley.gov.uk/news/children-and-young-people-have-an-egg-cellent-easter-at-healthy-holidays-clubs/",
        "umbraco_id": 41542
    },
    {
        "url": "https://www.barnsley.gov.uk/services/events/twisted-festival/",
        "umbraco_id": 41545
    },
    {
        "url": "https://www.barnsley.gov.uk/news/preparations-underway-to-welcome-new-mayor-of-barnsley-for-2022-23/",
        "umbraco_id": 41555
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/honeywell-lane-barnsley-proposed-no-waiting-at-any-time-restrictions/",
        "umbraco_id": 41572
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/town-centre-car-parks/",
        "umbraco_id": 41582
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/barnsley-footpath-no-17-proposal/",
        "umbraco_id": 41583
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/laithes-close-athersley-south-proposal/",
        "umbraco_id": 41584
    },
    {
        "url": "https://www.barnsley.gov.uk/news/six-months-on-beat-the-street-barnsley-continues-to-help-local-residents-to-stay-active/",
        "umbraco_id": 41604
    },
    {
        "url": "https://www.barnsley.gov.uk/news/more-than-gbp16m-invested-in-local-community-projects/",
        "umbraco_id": 41608
    },
    {
        "url": "https://www.barnsley.gov.uk/services/our-council/our-strategies/children-in-care-and-care-leavers-strategy-2022-2025/",
        "umbraco_id": 41613
    },
    {
        "url": "https://www.barnsley.gov.uk/news/partners-explore-whats-possible-for-transport-and-logistics-in-barnsley/",
        "umbraco_id": 41626
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/barnsley-footpath-no-17/",
        "umbraco_id": 41633
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/wombwell-footpath-nos-43-and-53/",
        "umbraco_id": 41634
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/brook-hill-lane-carlecotes-proposal/",
        "umbraco_id": 41635
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/kirk-cross-crescent-royston-proposal/",
        "umbraco_id": 41637
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-support-available-to-people-with-learning-disabilities-in-barnsley-to-prevent-bowel-cancer/",
        "umbraco_id": 41643
    },
    {
        "url": "https://www.barnsley.gov.uk/news/year-end-performance-report-highlights-our-positive-progress-in-making-barnsley-the-place-of-possibilities/",
        "umbraco_id": 41647
    },
    {
        "url": "https://www.barnsley.gov.uk/news/school-buildings-investment-recommended-for-approval/",
        "umbraco_id": 41651
    },
    {
        "url": "https://www.barnsley.gov.uk/news/poet-laureate-s-new-work-premiered-through-two-headed-lamb/",
        "umbraco_id": 41657
    },
    {
        "url": "https://www.barnsley.gov.uk/news/substance-misuse-provision-for-barnsley/",
        "umbraco_id": 41664
    },
    {
        "url": "https://www.barnsley.gov.uk/news/major-investment-in-council-housing-recommended-for-approval/",
        "umbraco_id": 41666
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/",
        "umbraco_id": 41667
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/t-level-placements/",
        "umbraco_id": 41669
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/supported-internships/",
        "umbraco_id": 41670
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/apprenticeships/",
        "umbraco_id": 41684
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/general-work-experience/",
        "umbraco_id": 41686
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/wider-support/",
        "umbraco_id": 41688
    },
    {
        "url": "https://www.barnsley.gov.uk/services/training-and-development/inclusive-offer/resources-and-support/",
        "umbraco_id": 41690
    },
    {
        "url": "https://www.barnsley.gov.uk/news/five-new-pieces-of-artwork-created-for-barnsley-museums-as-part-of-a-programme-to-support-local-culture/",
        "umbraco_id": 41702
    },
    {
        "url": "https://www.barnsley.gov.uk/services/conservation/elsecar-conservation-area-consultation/",
        "umbraco_id": 41704
    },
    {
        "url": "https://www.barnsley.gov.uk/news/the-barnsley-music-hub-celebrates-school-childrens-talent-with-musical-festivals/",
        "umbraco_id": 41722
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/carrs-lane-cudworth-proposal/",
        "umbraco_id": 41726
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/olympus-way-hoyland-common-proposal/",
        "umbraco_id": 41742
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/station-road-darton-proposal/",
        "umbraco_id": 41746
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/hood-hill-proposal/",
        "umbraco_id": 41750
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/transport-projects/elsecar-station-access-scheme/",
        "umbraco_id": 41751
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/transport-projects/darton-station-access-scheme/",
        "umbraco_id": 41754
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/manchester-road-millhouse-green/",
        "umbraco_id": 41758
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/various-streets-hazelheadmillhouse-green-proposal/",
        "umbraco_id": 41761
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-financial-incentive-scheme-launched-to-support-young-people-to-quit-smoking/",
        "umbraco_id": 41770
    },
    {
        "url": "https://www.barnsley.gov.uk/news/progress-in-tackling-road-safety-discussed/",
        "umbraco_id": 41772
    },
    {
        "url": "https://www.barnsley.gov.uk/services/roads-travel-and-parking/transport-projects/transport-strategy/",
        "umbraco_id": 41773
    },
    {
        "url": "https://www.barnsley.gov.uk/news/making-caring-visible-valued-and-supported-in-barnsley-this-carers-week/",
        "umbraco_id": 41775
    },
    {
        "url": "https://www.barnsley.gov.uk/news/public-consultation-on-darton-and-elsecar-station-access-improvements/",
        "umbraco_id": 41778
    },
    {
        "url": "https://www.barnsley.gov.uk/news/market-stalls-return-to-goldthorpe/",
        "umbraco_id": 41781
    },
    {
        "url": "https://www.barnsley.gov.uk/news/congratulations-former-cllr-dorothy-higginbottom-named-in-hm-the-queen-s-jubilee-birthday-honours-list-2022/",
        "umbraco_id": 41782
    },
    {
        "url": "https://www.barnsley.gov.uk/news/household-waste-recycling-centres-consultation/",
        "umbraco_id": 41785
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-council-to-restrict-unhealthy-food-and-drink-advertising/",
        "umbraco_id": 41787
    },
    {
        "url": "https://www.barnsley.gov.uk/services/accessibility/free-digital-support-sessions/",
        "umbraco_id": 41805
    },
    {
        "url": "https://www.barnsley.gov.uk/news/send-services-will-be-showcased-at-local-offer-live-week/",
        "umbraco_id": 41809
    },
    {
        "url": "https://www.barnsley.gov.uk/news/public-consultation-on-new-transport-strategy/",
        "umbraco_id": 41811
    },
    {
        "url": "https://www.barnsley.gov.uk/news/update-on-penny-pie-park-foot-and-cycle-bridge-project/",
        "umbraco_id": 41813
    },
    {
        "url": "https://www.barnsley.gov.uk/news/penny-pie-park-transformation-reaches-final-stages/",
        "umbraco_id": 41816
    },
    {
        "url": "https://www.barnsley.gov.uk/news/residents-are-invited-to-welcome-the-new-mayor-of-barnsley-at-civic-service/",
        "umbraco_id": 41820
    },
    {
        "url": "https://www.barnsley.gov.uk/news/stunning-digital-reconstruction-reveals-yorkshire-village-s-remarkable-industrial-past/",
        "umbraco_id": 41822
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/mitchell-streetwhite-cross-lane-worsbrough-dale-proposal/",
        "umbraco_id": 41826
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/kelly-street-goldthorpe-proposal/",
        "umbraco_id": 41827
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/derwent-crescent-athersley-south/",
        "umbraco_id": 41829
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/spa-well-grove-brierley-proposal/",
        "umbraco_id": 41830
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/robin-hood-avenue-poplar-terrace-east-end-crescent-royston-proposal/",
        "umbraco_id": 41831
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/coronation-street-monk-bretton-proposal/",
        "umbraco_id": 41832
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/gosling-gate-road-goldthorpe/",
        "umbraco_id": 41833
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/ingbirchworth-road-thurlstone-proposal/",
        "umbraco_id": 41834
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/barnsley-road-brierley-proposal/",
        "umbraco_id": 41835
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/huddersfield-roadvictoria-crescentwestern-street-barnsley-proposal/",
        "umbraco_id": 41836
    },
    {
        "url": "https://www.barnsley.gov.uk/services/children-families-and-education/safeguarding-families-in-barnsley/safeguarding-adults-in-barnsley/barnsley-safeguarding-adults-board/annual-report-202122/",
        "umbraco_id": 41839
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/children-young-people-and-families/healthy-holidays/summer-healthy-holidays-clubs-2022/",
        "umbraco_id": 41841
    },
    {
        "url": "https://www.barnsley.gov.uk/news/local-artists-support-the-cooper-gallery-s-fundraising-auction/",
        "umbraco_id": 41845
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsleys-famous-outdoor-market-to-launch-with-a-week-of-celebration/",
        "umbraco_id": 41846
    },
    {
        "url": "https://www.barnsley.gov.uk/news/we-re-remembering-the-falklands-war/",
        "umbraco_id": 41848
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-is-blossoming-with-talent-in-this-year-s-poster-competition/",
        "umbraco_id": 41853
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/laithes-close-athersley-south/",
        "umbraco_id": 41862
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-all-age-mental-health-strategy-launches-in-barnsley/",
        "umbraco_id": 41866
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-economic-development/",
        "umbraco_id": 41870
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-economic-development/about-barnsley/",
        "umbraco_id": 41871
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-economic-development/about-the-council/",
        "umbraco_id": 41872
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-economic-development/about-our-projects/",
        "umbraco_id": 41873
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-economic-development/about-the-role/",
        "umbraco_id": 41874
    },
    {
        "url": "https://www.barnsley.gov.uk/services/jobs/head-of-economic-development/apply/",
        "umbraco_id": 41875
    },
    {
        "url": "https://www.barnsley.gov.uk/news/barnsley-archives-and-local-studies-nominated-for-an-archives-and-records-association-excellence-award/",
        "umbraco_id": 41881
    },
    {
        "url": "https://www.barnsley.gov.uk/news/unique-egyptian-exhibition-to-mark-100-years-since-discovery-of-tutankhamen-s-tomb/",
        "umbraco_id": 41897
    },
    {
        "url": "https://www.barnsley.gov.uk/statements/14062022-relocation-of-mands-in-barnsley-statement-from-cllr-sir-steve-houghton-cbe-leader-of-barnsley-council/",
        "umbraco_id": 41904
    },
    {
        "url": "https://www.barnsley.gov.uk/news/wedding-dress-of-notable-family-on-display-at-cannon-hall-museum/",
        "umbraco_id": 41912
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/high-street-monk-bretton-proposal/",
        "umbraco_id": 41913
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/fitzwilliam-street-barnsley-proposal/",
        "umbraco_id": 41914
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/westgate-barnsley-proposal/",
        "umbraco_id": 41915
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/penistone-bridleway-no-110/",
        "umbraco_id": 41916
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/honeywell-lane-and-honeywell-street-barnsley-proposal/",
        "umbraco_id": 41917
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/various-streets-barnsley-proposal/",
        "umbraco_id": 41918
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/sheffield-road-hoyland-birdwell-roundabout-to-cross-keys-proposal/",
        "umbraco_id": 41919
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/sackville-street-barnsley-proposal/",
        "umbraco_id": 41920
    },
    {
        "url": "https://www.barnsley.gov.uk/news/we-re-supporting-clean-air-day/",
        "umbraco_id": 41927
    },
    {
        "url": "https://www.barnsley.gov.uk/public-notices/sheffield-road-hoyland-broadcarr-road-to-parkside-road/",
        "umbraco_id": 41929
    },
    {
        "url": "https://www.barnsley.gov.uk/news/local-businesses-celebrated-at-awards-evening/",
        "umbraco_id": 41936
    },
    {
        "url": "https://www.barnsley.gov.uk/news/evri-recruitment-day-coming-to-barnsley-digital-media-centre/",
        "umbraco_id": 41939
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-a-year-of-fantastic-projects-in-our-communities/",
        "umbraco_id": 41940
    },
    {
        "url": "https://www.barnsley.gov.uk/news/new-strategy-sets-out-how-we-ll-work-together-to-tackle-domestic-abuse/",
        "umbraco_id": 41948
    },
    {
        "url": "https://www.barnsley.gov.uk/news/celebrating-armed-forces-day-in-barnsley/",
        "umbraco_id": 41951
    },
    {
        "url": "https://www.barnsley.gov.uk/services/health-and-wellbeing/lgbtqplus/",
        "umbraco_id": 41953
    }
]
let counter = 0
for (i = 0; i < urls.length; i++) {
    // console.log("--------------------------------")
    for (j = 0; j < urls.length; j++) {
        if (urls[i].url == urls[j].url) {
            if (i != j) {
                console.log(urls[i].url)
                console.log(urls[i].umbraco_id)
                counter = counter + 1
            }
        }
    }
}
console.log(counter)