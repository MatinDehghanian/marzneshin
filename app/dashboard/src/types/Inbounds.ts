import { ProtocolType } from './Protocol';

export type InboundType = {
    id: number;
    tag: string;
    protocol: ProtocolType;
    network: string;
    tls: string;
    port?: number;
};

export type Inbounds = InboundType[];
