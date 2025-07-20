"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service, ServiceContent } from "@/types";
import { ArrowLeft, CheckCircle, FileText } from "lucide-react";

interface ServiceDetailProps {
	service: Service;
	onBack: () => void;
}

export const ServiceDetail = ({ service, onBack }: ServiceDetailProps) => {
	const [selectedContent, setSelectedContent] = useState<ServiceContent | null>(
		null,
	);

	const renderContentDetail = (content: ServiceContent) => (
		<div className="space-y-6">
			<div>
				<h3 className="text-2xl font-semibold mb-2">{content.title}</h3>
				<p className="text-gray-600">{content.description}</p>
			</div>

			{content.requirements && (
				<div>
					<h4 className="text-lg font-medium mb-3 flex items-center gap-2">
						<FileText className="w-5 h-5" />
						Pièces requises
					</h4>
					<ul className="space-y-2">
						{content.requirements.map((req, index) => (
							<li key={index} className="flex items-start gap-2">
								<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
								<span>{req}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{content.steps && (
				<div>
					<h4 className="text-lg font-medium mb-3">Étapes à suivre</h4>
					<ol className="space-y-2">
						{content.steps.map((step, index) => (
							<li key={index} className="flex items-start gap-3">
								<span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
									{index + 1}
								</span>
								<span>{step}</span>
							</li>
						))}
					</ol>
				</div>
			)}
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-200 overflow-hidden">
			<div className="min-h-screen bg-[url('/bg_image.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="min-h-screen bg-black/40 backdrop-blur-sm flex">
					{/*Lef menu*/}
					<div className="w-80 ml-8 mt-8 h-fit rounded-lg bg-white/90 backdrop-blur-md shadow-2xl border-r border-white/20 p-6">
						<Button
							variant="outline"
							onClick={onBack}
							className="flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm"
						>
							<ArrowLeft className="w-4 h-4" />
							Retour aux services
						</Button>

						<h2 className="text-xl font-bold mt-12 mb-4">{service.name}</h2>
						<p className="text-gray-600 mb-8 text-sm">{service.description}</p>

						<nav className="space-y-2">
							{service.contents.map((content) => (
								<button
									key={content.id}
									onClick={() => setSelectedContent(content)}
									className={`w-full text-left p-3 rounded-lg transition-all duration-150 touch-feedback select-none backdrop-blur-sm ${
										selectedContent?.id === content.id
											? "bg-blue-500/80 text-white border-l-4 border-blue-300"
											: "bg-white/60 hover:bg-white/80 active:bg-white/90"
									}`}
								>
									<div className="font-medium">{content.title}</div>
									<div
										className={`text-sm mt-1 ${
											selectedContent?.id === content.id
												? "text-blue-100"
												: "text-gray-500"
										}`}
									>
										{content.description}
									</div>
								</button>
							))}
						</nav>
					</div>

					{/* Main Content */}
					<div className="flex-1 p-8">
						<Card className="h-full bg-white/90 backdrop-blur-md shadow-2xl">
							<CardContent className="p-8">
								{selectedContent ? (
									renderContentDetail(selectedContent)
								) : (
									<div className="text-center text-gray-500 mt-20">
										<FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
										<h3 className="text-xl font-medium mb-2">
											Sélectionnez un service
										</h3>
										<p>
											Choisissez un élément dans le menu de gauche pour voir les
											détails
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
