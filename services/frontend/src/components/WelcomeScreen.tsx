"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hand } from "lucide-react";

interface WelcomeScreenProps {
	onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
	return (
		<div
			className="min-h-screen bg-gray-200 overflow-hidden touch-feedback"
			onClick={onStart}
		>
			<div className="min-h-screen bg-[url('/bg_image.jpg')] bg-cover bg-center bg-no-repeat animate-ken-burns">
				<div className="min-h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center p-8">
					<Card className="w-full bg-white/60 backdrop-blur-xs max-w-3xl text-center shadow-2xl">
						<CardContent className="p-16">
							<div className="mb-12">
								<h1 className="text-6xl font-bold text-gray-800 text-shadow-md mb-4">
									Bienvenue au Kiosque
								</h1>
								<p className="text-2xl text-gray-800 mb-12">
									Accédez facilement aux services de votre commune
								</p>
							</div>

							<div className="flex flex-col items-center">
								<div className="mb-6">
									<Button
										onClick={onStart}
										className="w-48 h-48 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-2xl flex items-center justify-center group pulse-scale"
									>
										<Hand className="w-12 h-12 text-white" />
									</Button>
								</div>

								<div className="text-lg font-medium text-gray-700 mb-2">
									Touchez pour commencer
								</div>
								<div className="text-sm text-gray-500">
									{"Cliquez n'importe où sur l'écran"}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};
