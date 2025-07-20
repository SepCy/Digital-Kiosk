"use client";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types";
import { FileText, Building, Calculator, ArrowLeft } from "lucide-react";

interface ServiceGridProps {
	services: Service[];
	onServiceSelect: (service: Service) => void;
	onBack: () => void;
}

const iconMap = {
	FileText,
	Building,
	Calculator,
};

export const ServiceGrid = ({
	services,
	onServiceSelect,
	onBack,
}: ServiceGridProps) => {
	return (
		<div className="min-h-screen bg-gray-200 overflow-hidden">
			<div className="min-h-screen bg-[url('/bg_image.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="min-h-screen bg-black/40 backdrop-blur-sm p-8">
					<div className="max-w-6xl mx-auto">
						<div className="flex items-center justify-between mb-8">
							<Button
								variant="outline"
								onClick={onBack}
								className="flex items-center gap-2 bg-white/80 backdrop-blur-sm"
							>
								<ArrowLeft className="w-4 h-4" />
								Retour
							</Button>
							<h1 className="text-3xl font-bold text-white bg-black/20 backdrop-blur-sm px-6 py-2 rounded-lg">
								Services Municipaux
							</h1>
							<div></div>
						</div>

						<div className="grid grid-cols-1 mt-1/2 translate-y-1/2 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{services.map((service) => {
								const IconComponent =
									iconMap[service.icon as keyof typeof iconMap];
								return (
									<Card
										key={service.id}
										clickable
										className="cursor-pointer py-4 hover:shadow-lg transition-all duration-200 bg-white/60 backdrop-blur-xs"
										onClick={() => onServiceSelect(service)}
									>
										<CardHeader className="text-center">
											<div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit touch-feedback">
												<IconComponent className="w-8 h-8 text-blue-600" />
											</div>
											<CardTitle className="text-xl">{service.name}</CardTitle>
											<CardDescription className="text-md text-gray-800">
												{service.description}
											</CardDescription>
										</CardHeader>
									</Card>
								);
							})}
						</div>
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};
