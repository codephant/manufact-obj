import obj from ".."
import { createFrom } from ".."

export default describe => {
	describe("builder$from", it => {
		const Sentinel = {Sentinel:true}

		it ("creates new obj with prototype", ensure => {
			ensure.equals
			( Object.getPrototypeOf(obj().from(Sentinel).end)
			, Sentinel
			, "via obj().from"
			)
			ensure.equals
			( Object.getPrototypeOf(createFrom(Sentinel).end)
			, Sentinel
			, "via createFrom"
			)
			ensure.end()
		})
	})
}