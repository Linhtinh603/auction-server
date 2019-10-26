const { gql } = require('apollo-server-express')


const typeDefs = gql`
	scalar Date

	type Role {
		slug: ID!
		name: String
	}

	type ProductCategory {
		id: ID!
		name: String
	}

	type AuctionType {
		id: ID!
		name: String
	}

	type User {
		id: ID!
		userName: String
		hashPassword: String
		firstName: String
		lastName: String
		avatar: String
		address: String
		birthday: Date
		phoneNumber: String
		email: String
		vipMember: Boolean
		activeStatus: Boolean
		createTime: Date
		amount: Int
		role: String
	}

	type AuctionHistory {
		time: String,
		price: Int,
		user: User
	}

	type AuctionCondition {
		vipAccount: Boolean,
		accountActiveDay: Int
	}

	type AuctionProduct {
		ownerId: String
		createTime: Date
		productName: String
		startTime: Date
		endTime: Date
		avatar: String
		images: [String]
		currentPrice: Int
		floorPrice: Int
		ceilingPrice: Int
		priceStep: Int
		finalPrice: Int
		winner: String
		description: String
		status: Int
		productCategory: String
		auctionHistory: [AuctionHistory]
		auctionCondition: AuctionCondition
		auctionType: String
		owner: User
	}

	type LoginResponse {
		token: String
		refreshToken: String
	}

	interface Response {
		code: String!
		success: Boolean!
		message: String!
	}

	type Query {
		login(userName: String!, password: String!): LoginResponse
		roles: [Role]
		productCategories: [ProductCategory]
		auctionTypes: [AuctionType]
		user(id: ID!): User
		users: [User]
		auctionProduct(ownerId: String!,createTime: Date!): AuctionProduct
		auctionProducts: [AuctionProduct]
		auctionProductsExist: [AuctionProduct]
	}

	

	interface MutationResponse {
		code: String!
		success: Boolean!
		message: String!
	}

	type AddUserMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		user: User
	}
	type AmountMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		newAmount: Int
	}

	type DeleteUserMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		userId: String
	}

	type AuctionMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		productId: String
	}

	input UserInput {
		id: ID
		userName: String
		password: String
		firstName: String
		lastName: String
		address: String
		birthday: Date
		phoneNumber: String
		email: String
		role: String
	}

	input ProductInput {
		ownerId: String
		createTime: Date
		productName: String
		startTime: Date
		endTime: Date
		avatar: String
		images: [String]
		currentPrice: Int
		floorPrice: Int
		priceStep: Int
		finalPrice: Int
		winner: String
		description: String
		status: Int
		productCategory: String
		auctionType: String
	}

	type Mutation {
		addUser(user: UserInput): AddUserMutationResponse
		rechare(userId: String,change: Int): AmountMutationResponse
		updateUser(user: UserInput): AddUserMutationResponse
		lockUser(id: String): DeleteUserMutationResponse
		addProduct(product: ProductInput): Response
		auction(ownerId: String!,createTime: Date!,price: Int!): Response
	}


`

module.exports = typeDefs