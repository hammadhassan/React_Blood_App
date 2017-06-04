import firebase from 'firebase'
import { AuthAction } from './authAction'

export class FirebaseAuthService {


    static registerUserOnFirebase(credentials) {
        return (dispatch) => {
            dispatch(AuthAction.signupProcess())

            firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.pass)
                .then((userResponseFromFirebase) => {
                    FirebaseAuthService.createUserOnFirebaseWithUid(dispatch, credentials, userResponseFromFirebase)
                })
                .catch((error) => {
                    dispatch(AuthAction.signupReject(error))
                });
        }
    }

    static createUserOnFirebaseWithUid(dispatch, credentials, userResponseFromFirebase) {

        delete credentials.pass
        firebase.database().ref('/')
            .child(`newUsers/${userResponseFromFirebase.uid}`)
            .set(credentials)
            .then(() => {
                dispatch(AuthAction.signupSuccessFull())
            })
    }

    static loginOnFirebase(credentials) {
        return (dispatch) => {
            firebase.auth()
                .signInWithEmailAndPassword(credentials.email, credentials.pass)
                .then((authUser) => {
                    FirebaseAuthService.getUserFromFirebase(dispatch, authUser)
                })
                .catch((error) => {
                    dispatch(AuthAction.loginReject(error))
                });
        }
    }

    static getUserFromFirebase(dispatch, authUser) {
        firebase.database().ref('/')
            .child(`newUsers/${authUser.uid}`)
            .once('value', (snap) => {
                dispatch(AuthAction.loginSuccessFull(snap.val()))
            })
    }

    static logoutFromFirebase() {
        return (dispatch) => {
            firebase.auth().signOut()
                .then(function () {
                    dispatch(AuthAction.logOutUser())
                })
                .catch((error) => {
                    console.log(error.message)
                    dispatch(AuthAction.logOutUserReject(error))
                });
        }
    }
    static sendingDataToFirebase(data) {
        return (dispatch) => {
            let database = firebase.database().ref().child("dataUsingRedux");
            database.push(data);
            dispatch(AuthAction.sentDataAction())
        }
    }

    static fetchDataFromFirebase() {
        return (dispatch) => {
            let arrdata = []
            let database = firebase.database().ref("/dataUsingRedux/");
            database.on('value', (object) => {
                let data = object.val();
                for (var a in data) {
                    arrdata.push(data[a].donorInfo);
                }
                dispatch(AuthAction.gettingDataAction(arrdata));
            });
        }
    }
}