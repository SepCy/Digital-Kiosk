"use client";

import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ServiceDetail } from "@/components/ServiceDetail";
import { cameroonServices } from "@/data/services";
import { Service } from "@/types";

type AppState = "welcome" | "services" | "service-detail";

export default function Home() {
	const [currentState, setCurrentState] = useState<AppState>("welcome");
	const [selectedService, setSelectedService] = useState<Service | null>(null);

	const handleStart = () => setCurrentState("services");

	const handleServiceSelect = (service: Service) => {
		setSelectedService(service);
		setCurrentState("service-detail");
	};

	const handleBackToServices = () => setCurrentState("services");
	const handleBackToWelcome = () => setCurrentState("welcome");

	return (
		<main>
			{currentState === "welcome" && <WelcomeScreen onStart={handleStart} />}

			{currentState === "services" && (
				<ServiceGrid
					services={cameroonServices}
					onServiceSelect={handleServiceSelect}
					onBack={handleBackToWelcome}
				/>
			)}

			{currentState === "service-detail" && selectedService && (
				<ServiceDetail
					service={selectedService}
					onBack={handleBackToServices}
				/>
			)}
		</main>
	);
}
