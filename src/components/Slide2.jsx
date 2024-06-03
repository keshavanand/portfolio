<div>

							{/* Offline-Sync Real time Todo  */}
							<div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16">
								<dl className="mt-5 px-2 space-y-10 order-last">
									{vroomFeatures.map((item) => (
										<div key={item.id} className="relative">
											<dt>
												<motion.div
													whileHover={{
														scale: "1.2",
													}}
													className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
												>
													<item.icon className="h-6 w-6" aria-hidden="true" />
												</motion.div>
												<p className="ml-16 text-gray-800 text-xl  leading-6 font-bold dark:text-white">
													{item.name}
												</p>
											</dt>
											<dd className="mt-2 ml-16 text-base font-semibold text-gray-500 ">
												{item.description}
											</dd>
										</div>
									))}
								</dl>
								<div className="-mx-4 relative lg:mt-0" aria-hidden="true">
									<div className="flex px-6 flex-col rounded-xl">
										<motion.div
											className="m-auto lg:w-11/12"
											whileHover={{
												scale: 1.1,
											}}
										>
											<img
												className="relative mx-auto rounded-xl border-gray-500 border-2 h-84"
												width={490}
												height={50}
												src="./TodosRealtime.png"
												alt=""
											/>
										</motion.div>
										<div className="flex flex-col px-6 py-4">
											<div className="flex justify-between">
												<h2 className="text-3xl font-bold text-black dark:text-white">
													Todo Real Time
												</h2>
												{/* External links */}
												{/* Reactive, Realtime, Local-First */}
												<div className="flex gap-6 ">
													<motion.a
														whileHover={{
															scale: 1.2,
															textShadow: "0px 0px 10px rgba(255, 255, 255)",
														}}
														whileTap={{ scale: 0.8 }}
														alt="github"
														href="https://github.com/Sumit2202/todo-real-time"
													>
														<FaGithub aria-label="github" size={28} />
													</motion.a>

												</div>
											</div>
											{/* Tags */}
											<div className="mt-3 flex flex-wrap pb-4 border-b-2 border-grey-200 gap-2">
												<motion.a
													whileHover={{
														scale: 1.2,
														textShadow: "0px 0px 10px rgba(255, 255, 255)",
													}}
													whileTap={{ scale: 0.8 }}
													href="https://reactnative.dev/"
													className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-sky-900 text-cyan-400 rounded-full"
												>
													<FaReact className="mr-1" aria-label="React" size={20} />
													React Native
												</motion.a>
												<motion.a
													whileHover={{
														scale: 1.2,
														textShadow: "0px 0px 10px rgba(255, 255, 255)",
													}}
													whileTap={{ scale: 0.8 }}
													href="https://expo.dev/"
													className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-400 rounded-full"
												>
													<img
														className="mr-1 rounded-full"
														width={30}
														height={35}
														src="https://miro.medium.com/v2/resize:fit:1200/1*M4W1zKMuf0xmAcZwZgUcTQ.png"
														alt=""
													/>
													Expo
												</motion.a>
												<motion.a
													whileHover={{
														scale: 1.2,
														textShadow: "0px 0px 10px rgba(255, 255, 255)",
													}}
													whileTap={{ scale: 0.8 }}
													href="https://reactnativepaper.com/"
													className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-300 text-indigo-700 rounded-full"
												>
													<img
														className="mr-1 rounded-full"
														width={25}
														height={20}
														src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWIvXFPHRG_qLo01aWNpBL_ZDqlofoOLlgQ&usqp=CAU"
														alt=""
													/>
													React Native Paper
												</motion.a>
												<motion.a
													whileHover={{
														scale: 1.2,
														textShadow: "0px 0px 10px rgba(255, 255, 255)",
													}}
													whileTap={{ scale: 0.8 }}
													href="https://firebase.google.com/docs/firestore"
													className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-400 rounded-full"
												>
													<img
														className="mr-1 rounded-full"
														width={25}
														height={30}
														src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
														alt=""
													/>
													Firebase Firestore
												</motion.a>
												<motion.a
													whileHover={{
														scale: 1.2,
														textShadow: "0px 0px 10px rgba(255, 255, 255)",
													}}
													whileTap={{ scale: 0.8 }}
													href="https://firebase.google.com/docs/auth"
													className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-400 rounded-full"
												>
													<img
														className="mr-1 rounded-full"
														width={25}
														height={30}
														src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
														alt=""
													/>
													Firebase Auth
												</motion.a>
											</div>
											{/* Description */}
											<div className="py-4 font-semibold text-gray-800 dark:text-gray-500  ">
												A screenshot showcasing a React Native app for keeping a list of Todos,
												accross devices, built with React Native,Expo, React Native Paper, and Firebase.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>