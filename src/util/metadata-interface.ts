import {Metadata} from "next";

interface AppMetadata extends Metadata {
    titlePiece?: string
}

export function metadataCreate(metadata: AppMetadata | null = null): Metadata {
    if (!metadata) {
        return {title: 'Jayson Fong'};
    }

    if (!metadata.title) {
        metadata.title = 'Jayson Fong';
    }

    if (metadata?.titlePiece) {
        metadata.title = `Jayson Fong | ${metadata.titlePiece}`;
    }

    return metadata;
}