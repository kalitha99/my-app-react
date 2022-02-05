import React from 'react';
import { UserContext, ChannelContext } from './App';
function ComponentF() {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user1 => {

                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>
                                            User Context Value {user1}, channel context val {channel}
                                        </div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>);
}

export default ComponentF;