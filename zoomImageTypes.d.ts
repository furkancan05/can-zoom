export interface States {
    imageScale: number;
    isMaxScale: boolean;
    position: {
        x: number;
        y: number;
    };
}
export interface ZoomImageParams {
    /**
     * Zoom multiplier in number.
     * @param {number} scale
     */
    scale: number;
    /**
     * Zoom multiplier on click in number.
     * @param {number?} maxScale
     */
    maxScale?: number;
    /**
     * Width limit of component in number.
     * @param {number} width
     */
    width: number;
    /**
     * Height limit of component in number.
     * @param {number} height
     */
    height: number;
    /**
     * Source url of image in string.
     * @param {string} imagePath
     */
    imagePath: string;
    /**
     * Background color of container. Supports all color types provided that they are strings.
     * @param {string} backgroundColor
     */
    backgroundColor?: string;
    /**
     * Set image positioned inside container.
     * @param {string} objectFit
     */
    objectFit?: "contain" | "cover" | "fill" | "inherit" | "initial" | "none" | "revert" | "revert-layer" | "unset" | "scale-down";
    /**
     * Set cursor type.
     * @param {string} cursor
     */
    cursor?: "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out";
    /**
     * Type of border in string.
     * @param {string} borderStyle
     */
    borderStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden";
    /**
     * Width value of border.
     * @param {number} borderWidth
     */
    borderWidth?: number;
    /**
     * Color of border. Supports all color types provided that they are strings.
     * @param {string} borderColor
     */
    borderColor?: string;
    /**
     * Rounded value of border. "25%", "30px" ect.
     * @param {string} borderRadius
     */
    borderRadius?: string;
}
