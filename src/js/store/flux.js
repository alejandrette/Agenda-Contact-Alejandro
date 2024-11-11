const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Create Agenda
			messageError: '',
			showError: false,
			messageSuccessful: '',
			showSuccessful: false
		},
		actions: {
			postNewAgenda: async (nameAgenda) => {
				try {
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}`,
					{
					  method: "POST",
					  headers: { "Content-Type": "application/json" },
					  body: JSON.stringify({ slug: `${nameAgenda}` }),
					}
				  );
			
				  if (response.status === 400) {
					setStore({messageError: 'The agenda already exists', showError: true});
					setTimeout(() => setStore({showError: false}), 3000);
				  } else {
					setStore({messageSuccessful: 'Agenda Created', showSuccessful: true});
					setTimeout(() => setStore({showSuccessful: false}), 3000);
				  }
			
				  await response.json();
				} catch (error) {
				  console.error(error);
				}
			},

			postNewContact: async (nameAgenda, name, phone, email, address) => {
				try{
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}/contacts`, {
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address
							}),
						redirect: "follow"
					});

					if (response.status === 400) {
						setStore({messageError: 'The contact cant created', showError: true});
						setTimeout(() => setStore({showError: false}), 3000);
					} else {
						setStore({messageSuccessful: 'Contact Created', showSuccessful: true});
						setTimeout(() => setStore({showSuccessful: false}), 3000);
					}
				} catch (error){
					console.error(error);
				}
			}
		}
	};
};

export default getState;
