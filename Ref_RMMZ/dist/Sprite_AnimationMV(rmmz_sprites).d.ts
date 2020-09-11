declare function Sprite_AnimationMV(...args: any[]): void;
declare class Sprite_AnimationMV {
    constructor(...args: any[]);
    constructor: typeof Sprite_AnimationMV;
    initialize(): void;
    initMembers(): void;
    _targets: any;
    _animation: any;
    _mirror: any;
    _delay: any;
    _rate: number;
    _duration: number;
    _flashColor: any;
    _flashDuration: any;
    _screenFlashDuration: any;
    _hidingDuration: any;
    _hue1: any;
    _hue2: any;
    _bitmap1: any;
    _bitmap2: any;
    _cellSprites: any[];
    _screenFlashSprite: ScreenSprite;
    z: number;
    setup(targets: any, animation: any, mirror: any, delay: any): void;
    setupRate(): void;
    setupDuration(): void;
    update(): void;
    updateFlash(): void;
    updateScreenFlash(): void;
    absoluteX(): number;
    absoluteY(): number;
    updateHiding(): void;
    isPlaying(): boolean;
    loadBitmaps(): void;
    isReady(): any;
    createCellSprites(): void;
    createScreenFlashSprite(): void;
    updateMain(): void;
    updatePosition(): void;
    x: any;
    y: any;
    updateFrame(): void;
    currentFrameIndex(): number;
    updateAllCellSprites(frame: any): void;
    updateCellSprite(sprite: any, cell: any): void;
    processTimingData(timing: any): void;
    startFlash(color: any, duration: any): void;
    startScreenFlash(color: any, duration: any): void;
    startHiding(duration: any): void;
    onEnd(): void;
}