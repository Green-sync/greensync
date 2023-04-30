export declare interface HeroComponentProps {
    type: HeroTypes
    data: Partial<HeroDataOptions>
}

export declare type HeroTypes = "default" | "crop" |"aqua" |"farm"|"field"
export declare interface HeroComponentData {
    title: string
    description: string
    cta: HeroCtaDto
}

export declare interface HeroCtaDto {
    title: string;
    href: string;
    fn?: any
}

export declare interface HeroDataOptions extends Partial<HeroComponentData> {
    image: string
    bg: {
        color: string
        opacity: string
    }
}