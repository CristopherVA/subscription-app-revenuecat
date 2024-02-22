import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Purchases, { CustomerInfo, PurchasesOffering } from "react-native-purchases";

const apiKEY = {
    google: "",
    apple: ""
}

const typeOfMembership = {
    monthly: "proMonthly",
    yearly: "proYearly"
}

function useRevenueCat() {
    const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

    const isProMember = customerInfo?.activeSubscriptions.includes(typeOfMembership.monthly) ||
        customerInfo?.activeSubscriptions.includes(typeOfMembership.yearly)

    useEffect(() => {

        const fetchData = async () => {
            Purchases.setDebugLogsEnabled(true)

            if (Platform.OS === 'android') {
                await Purchases.configure({ apiKey: apiKEY.google })
            } else {
                await Purchases.configure({ apiKey: apiKEY.apple })
            }
        }

    }, [])

}

export default useRevenueCat;