import { Service } from "@/types";

export const cameroonServices: Service[] = [
	{
		id: "etat-civil",
		name: "État Civil",
		description: "Services d'enregistrement des naissances, mariages, décès",
		icon: "FileText",
		contents: [
			{
				id: "acte-naissance",
				title: "Acte de Naissance",
				description: "Demande d'acte de naissance",
				requirements: [
					"Pièce d'identité du demandeur",
					"Justificatif de domicile",
					"Frais de timbre",
				],
				steps: [
					"Remplir le formulaire de demande",
					"Présenter les pièces justificatives",
					"Payer les frais requis",
					"Retirer l'acte après traitement",
				],
			},
			{
				id: "acte-mariage",
				title: "Acte de Mariage",
				description: "Demande d'acte de mariage",
				requirements: [
					"Pièces d'identité des époux",
					"Certificat médical",
					"Témoins",
				],
			},
			{
				id: "acte-deces",
				title: "Acte de Décès",
				description: "Déclaration et acte de décès",
				requirements: [
					"Certificat médical de décès",
					"Pièce d'identité du déclarant",
					"Livret de famille",
				],
			},
		],
	},
	{
		id: "urbanisme",
		name: "Urbanisme et Habitat",
		description: "Permis de construire, certificats d'urbanisme",
		icon: "Building",
		contents: [
			{
				id: "permis-construire",
				title: "Permis de Construire",
				description: "Demande de permis de construire",
				requirements: [
					"Plan de situation",
					"Plan de masse",
					"Plan des façades",
					"Notice descriptive",
				],
			},
			{
				id: "certificat-urbanisme",
				title: "Certificat d'Urbanisme",
				description: "Information sur les règles d'urbanisme",
				requirements: [
					"Plan de situation",
					"Formulaire de demande",
					"Pièce d'identité",
				],
			},
		],
	},
	{
		id: "fiscalite",
		name: "Fiscalité Locale",
		description: "Taxes locales, patentes, impôts communaux",
		icon: "Calculator",
		contents: [
			{
				id: "patente",
				title: "Patente",
				description: "Demande de patente commerciale",
				requirements: [
					"Registre de commerce",
					"Pièce d'identité",
					"Justificatif de domiciliation",
				],
			},
			{
				id: "taxe-fonciere",
				title: "Taxe Foncière",
				description: "Paiement de la taxe foncière",
				requirements: [
					"Titre foncier",
					"Dernière quittance",
					"Pièce d'identité",
				],
			},
		],
	},
];
