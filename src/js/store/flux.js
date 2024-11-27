
import toast, { Toaster } from 'react-hot-toast';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contactList: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			//Cambiar el enlace de la api
			createContact: async (name, phone, email, address) => {
				const response = fetch("https://playground.4geeks.com/contact/docs#/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					})
				});

				const data = await response.json();
				if (response.ok) {
					setStore({ contact: data.contact });
					toast.success("Contact created successfully 🎉");
				} else {
					toast.error("Error creating contact ⛔");
				}
			},

			deleteContact: async (id) => {
				const response = fetch(`https://playground.4geeks.com/contact/agendas/gobando/contacts/${id}`, {
					method: "DELETE"
				});


				if (response.ok) {
					const store = getStore();
					const updatedContactList = store.contactList.filter(contact => contact.id !== id);
					setStore({ contactList: updatedContactList });
					toast.success("Contact deleted successfully 🎉");
				} else {
					toast.error("Error deleting contact ⛔");
				}
			},


			getContactList: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/gobando/contacts", {
					method: "GET"
				});


				const data = await response.json();
				console.log(data);
				setStore({ contactList: data.contacts });
			},




			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
