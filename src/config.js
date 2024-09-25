export default {
    oidc: {
        // fill these in
        clientId: '{yourClientID}',
        issuer: 'https://{yourOktaDomain}/oauth2/default',
        redirectUri: window.location.origin + '/login/callback',
        scopes: ['openid', 'offline_access', 'profile', 'email'],
    }
}
