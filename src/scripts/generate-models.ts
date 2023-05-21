import { generateModelsAsync, textHelper } from '@kontent-ai/model-generator'
import { rmSync, mkdirSync } from 'fs'

import * as dotenv from 'dotenv'
dotenv.config()

const fixNumberPrefixElementResolver = elementName => {
	if (elementName[0] >= '0' && elementName[0] <= '9') {
		return `_${elementName}`
	}
	return elementName
}

const runAsync = async () => {
	rmSync('./src/models', { recursive: true })
	mkdirSync('./src/models')

	// change working directory to models
	process.chdir('./src/models')

	await generateModelsAsync({
		sdkType: 'delivery',
		apiKey: process.env.KONTENT_API_KEY,
		projectId: process.env.KONTENT_PROJECT_ID,
		addTimestamp: false,
		isEnterpriseSubscription: true,
		elementResolver: (type, elementName) => `${fixNumberPrefixElementResolver(textHelper.toCamelCase(elementName))}`,
		contentTypeFileResolver: type => `${textHelper.toPascalCase(type.codename)}Model`,
		contentTypeResolver: type => `${textHelper.toPascalCase(type.codename)}Model`,
		taxonomyTypeResolver: type => `${textHelper.toPascalCase(type.codename)}`,
		exportProjectSettings: {
			exportWebhooks: false,
			exportWorkflows: false,
			exportRoles: false,
			exportAssetFolders: false,
			exportCollections: false,
			exportLanguages: false,
		},
	})
}

// Self-invocation async function
;(async () => {
	await runAsync()
})().catch(err => {
	console.error(err)
	throw err
})
