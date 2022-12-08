
type Config<Value> = {
    value: Value;
}

export type ComponentProps<Value = any, Payload = any> = {
    config: Config<Value>;
    payload: Payload;
    onChange: (value: Value) => void
}