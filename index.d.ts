
declare namespace manufact {
	export interface SetAccessBuilder {
		set(setter : (value :any) => void) : ObjectBuilder
	}

	export interface GetAccessBuilder {
		get(getter : () => any) : ObjectBuilder
	}

	export interface OnlyAccessBuilder extends SetAccessBuilder, GetAccessBuilder {
	}

	export interface AccessBuilder {
		set(setter : (value : any) => void) : GetAccessBuilder
		get(getter : () => any) : SetAccessBuilder
		only: OnlyAccessBuilder
	}

	export interface ObjectBuilder {
		enum : this
		config : this
		write : this
		hidden : this
		readonly : this
		fixed : this

		property(name : string, value : any) : this
		property(name : string) : AccessBuilder
		property(keyValuePair : Object) : this
		property(getter : Function) : this
		key(name : string, value: any) : this
		key(name : string) : AccessBuilder
		key(keyValuePair : Object) : this
		property(getter : Function) : this
		method(fn : Function) : this
		method(name : string | Function, fn : Function) : this
		method(keyValuePair : Object) : this

		end: Object
	}

	export interface DeferredCreates {
		plain() : ObjectBuilder
		from(prototype : Object) : ObjectBuilder
	}
}

declare function manufact(obj: Object): manufact.ObjectBuilder
declare function manufact(): manufact.DeferredCreates

export default manufact
