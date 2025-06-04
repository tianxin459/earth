export interface LocationInfo<T = unknown> {
    /** 维度 */
    lat: number;
    /** 经度 */
    lng: number;
    data?: T;
}
